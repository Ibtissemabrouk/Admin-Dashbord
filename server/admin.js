import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {getDatabase , ref, onValue } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";

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
const db =getDatabase(app);

 function affichageUsers(){
const allUsers = ref(db, "users/");
onValue(allUsers,(snapshot)=>{
const data = snapshot.val();
var keys = Object.keys(data);
for (let i=0 ; i<keys.length; i++){
  var current_user = keys[i];
  var email = data [current_user].Email;
  var password = data [current_user].Password;
  var adress = data [current_user].Adress;
  var city = data [current_user].City;
  var zip = data [current_user].Zip_code;
  console.log(email,password,adress,city,zip);
  var elementHTML = document.createElement("div");
elementHTML.innerHTML=
  "<div class=' m-5 w-75'  >"+
  "<i class='bi bi-person-check-fill'></i>" +
  "<span class='text-success text-decoration-underline'>"+current_user+"</span>"
+"<div>"
+"<h3><span class='text-primary'>Email :</span> "+ email+"</h3>"
+"</div>"+
  "<p class='mb-0'>Adress : "+adress+"</p>"+
  "<p class='mb-0'>City : "+city+"</p>"+
  "<p class='mb-0'>Zip_Code : "+zip+"</p>";
  document.getElementById("dashboard")
  .appendChild(elementHTML);
}

})

}
affichageUsers();