import express, { json } from "express";
import "dotenv/config";
import axios from "axios";
const app = express();
const PORT = process.env.PORT || 3000;
const otpStorage = new Map();

app.use(express.json());

async function generateRandom4Digit() {
  return Math.floor(1000 + Math.random() * 9000);
}

app.get("/", (req, res) => {
  res.send({ Result: "API is running successfully!" });
});

app.post("/sendOTP", async (req, res) => {
  try {
    const { phoneNumber, name } = req.body;

    // Validate phone number
    if (!phoneNumber || !/^\+91\d{10}$/.test(phoneNumber)) {
      return res
        .status(400)
        .json({ error: "Invalid phone number format. Use +91XXXXXXXXXX" });
    }

    // Validate name
    if (!name || typeof name !== "string") {
      return res.status(400).json({ error: "Invalid name format." });
    }

    // Generate OTP
    const otp = await generateRandom4Digit();
    // API request payload
    const payload = {
      messages: [
        {
          from: "+919600690881",
          to: phoneNumber,
          content: {
            language: "en_US",
            templateName: "utility_verification",
            templateData: {
              body: {
                placeholders: [name, String(otp)],
              },
            },
          },
        },
      ],
    };

    // API request headers
    const headers = {
      accept: "application/json",
      "content-type": "application/json",
      Authorization: "key_z6hIuLo8GC", // Add your actual authorization token here
    };

    // Sending OTP via DoubleTick API
    const response = await axios.post(
      "https://public.doubletick.io/whatsapp/message/template",
      payload,
      { headers }
    );

    otpStorage.set(phoneNumber, { otp, expiresAt: Date.now() + 30 * 1000 });

    // Send success response
    res.status(200).json({
      success: true,
      message: "OTP sent successfully!",
      otp: otp,
    });
  } catch (error) {
    // Handle Axios errors separately
    if (error.response) {
      return res.status(error.response.status).json({
        success: false,
        error: error.response.data || "Error from DoubleTick API",
      });
    }

    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
});

app.post("/verifyOTP", (req, res) => {
  try {
    const { phoneNumber, otp } = req.body;
    // Check if OTP matches
    const storedOtpData = otpStorage.get(phoneNumber);
    // Validate input
    if (!phoneNumber || !/^\+91\d{10}$/.test(phoneNumber)) {
      return res
        .status(400)
        .json({ error: "Invalid phone number format. Use +91XXXXXXXXXX" });
    }

    if (!otp) {
      return res.status(400).json({ error: "Invalid OTP format." });
    }

    // Get stored OTP

    if (!storedOtpData) {
      return res
        .status(400)
        .json({ error: "OTP expired or not found. Please request a new OTP." });
    }

    if (storedOtpData.otp !== otp) {
      return res
        .status(400)
        .json({ error: "Incorrect OTP. Please try again." });
    }

    // Check if OTP is expired
    if (Date.now() > storedOtpData.expiresAt) {
      otpStorage.delete(phoneNumber); // Remove expired OTP
      return res
        .status(400)
        .json({ error: "OTP has expired. Please request a new OTP." });
    }

    // OTP is verified, remove it from storage
    otpStorage.delete(phoneNumber);

    res
      .status(200)
      .json({ success: true, message: "OTP verified successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Listening at Port ${PORT}`);
});
