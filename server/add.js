import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase ,ref,set} from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCw_jNhJU4HHVDYiKz2931GNF_q_VF59Pk",
  authDomain: "dashboard-14636.firebaseapp.com",
  databaseURL:"https://dashboard-14636-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "dashboard-14636",
  storageBucket: "dashboard-14636.appspot.com",
  messagingSenderId: "438462739450",
  appId: "1:438462739450:web:753a49c48a9ccbdf5daa43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const myForm = document.getElementById('myForm');
function SubmitForm(e){
  e.preventDefault();
  //! GET ALL FORM DATA
  const email = document.getElementById("inputEmail").value;
  const password = document.getElementById("inputPassword").value;
  const adress = document.getElementById("inputAdress").value;
  const city = document.getElementById("inputCity").value;
  const zip = document.getElementById("inputZip").value;
console.log(email,password,adress,city,zip);
if (

  email.trim().length === 0 ||  password.trim().length ===0 ||
  adress.trim().length === 0 ||  city.trim().length ===0 ||
  zip.trim().length === 0
){
  alert("REMPLIRE TOUS LES CHAMPS SVP !");
}
else{
  createUser(email,password,adress,city,zip);
  alert("User created successfuly :D !");
  myForm.reset();
}

}
//^send Data to database function implementation
function createUser(email,password,adress,city,zip){
const db = getDatabase();
set(ref(db,'users/'+email.slice(0,4)+Math.floor(Math.random()*100).toString()),
{
  Email : email,
  Password : password,
  Adress : adress,
  City : city,
  Zip_code : zip
})
}

myForm.addEventListener("submit",(e)=>SubmitForm(e))