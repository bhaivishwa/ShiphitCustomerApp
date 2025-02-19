import axios from "axios";

async function CheckUserIsSignedin(phonenumber) {
  try {
    const response = await axios.post(
      "https://shipmentbackend-ad96a7a505ec.herokuapp.com/CheckUserIsSignedin",
      {
        phone_number: String(phonenumber),
      }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
}

export default {
  CheckUserIsSignedin: CheckUserIsSignedin,
};
