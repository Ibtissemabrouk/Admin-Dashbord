import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import {getAuth , sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCw_jNhJU4HHVDYiKz2931GNF_q_VF59Pk",
  authDomain: "dashboard-14636.firebaseapp.com",
  projectId: "dashboard-14636",
  storageBucket: "dashboard-14636.appspot.com",
  messagingSenderId: "438462739450",
  appId: "1:438462739450:web:753a49c48a9ccbdf5daa43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

const formulaire = document.getElementById("resetPwd");
;
function ResetPassword(e){
  e.preventDefault();
  const email=document.getElementById("emailUser").value;
  console.log(email);
  if (email.trim().length === 0){
    alert("Please fill the form !")
  }
  else{
  sendPasswordResetEmail(auth,email)
  .then((user)=>{
alert("a link has been sended to your email");
  })
  .catch((error)=>{
    console.log(error);
    aleert("Try Again ! , an error happen");

  })
}
}
formulaire.addEventListener('submit',(e)=>ResetPassword(e))
