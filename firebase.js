// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-analytics.js";
import { getFirestore, collection, doc, getDoc, addDoc, getDocs, setDoc, deleteDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
import { firebaseConfig } from "./credentials.js";


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

/*
* Topup Object:  
* { 
*   currency: String, 
*   amount: Integer,
*   price: Integer
* }
*/

const freefireRef = doc(db, "TopUp", "FreeFire");

/*
* Adds a Topup to topups collection of FreeFire
* @params topup - Topup Object 
*/
async function addFreeFireTopUp(topup){
  return await addDoc(collection(freefireRef, "topups"), topup);
}

async function removeFreeFireTopUp(id){
  await deleteDoc(doc(freefireRef, "topups", id));
}

async function getFreeFireTopUps(){
  var querySnap = await getDocs(collection(freefireRef, "topups"));
  var topups = [];
  querySnap.forEach((doc) => {
    topups.push(doc.data());
  });
  return topups;
}

export { addFreeFireTopUp, removeFreeFireTopUp, getFreeFireTopUps };
