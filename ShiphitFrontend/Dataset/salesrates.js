import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

async function salesrates(to_Country, active_Tab, weight_, Weighttype) {
  console.log("salesrates");
  console.log("Country:", to_Country);
  console.log("active tab:", active_Tab);
  console.log("weight:", weight_);
  console.log("Weighttype:", Weighttype);
  try {
    // ✅ Correct Firestore document reference
    const docRef = doc(db, "rateCards", "UK"); // "UK" is a document inside "rateCards" collection
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("Rate Card Data:", docSnap.data());
      return docSnap.data(); // ✅ Returns the data
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching rate card:", error);
    return null;
  }
}

export default salesrates;