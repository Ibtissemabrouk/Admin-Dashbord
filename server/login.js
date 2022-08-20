import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-auth.js";

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


const formulaire = document.getElementById("loginForm");
function checklogin(e){
    e.preventDefault();
    const email= document.getElementById("email").value;
    const password= document.getElementById("password").value;
    console.log(email,password);
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential)=>{
        console.log(userCredential);
        localStorage.setItem("cnx","A");
        alert("Connection success");
        window.location = "../pages/admin.html"

    })
    .catch((error)=>{
        console.log(error);
        alert("Password or email invalide !")
    })
}
formulaire.addEventListener("submit",(e)=>checklogin(e));