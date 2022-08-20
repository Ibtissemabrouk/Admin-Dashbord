import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getDatabase,get,ref,remove } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-database.js";


const firebaseConfig = {
  apiKey: "AIzaSyCw_jNhJU4HHVDYiKz2931GNF_q_VF59Pk",
  authDomain: "dashboard-14636.firebaseapp.com",
  databaseURL :"https://dashboard-14636-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dashboard-14636",
  storageBucket: "dashboard-14636.appspot.com",
  messagingSenderId: "438462739450",
  appId: "1:438462739450:web:753a49c48a9ccbdf5daa43"
};

const app = initializeApp(firebaseConfig);
const myForm = document.getElementById("deleteForm");
const db = getDatabase(app)
function deleteUser(e){

  e.preventDefault();
  const userId =document.getElementById('userToDelete').value;
  if(userId.trim().length<1){
    alert("USER NOT FOUND")
  }
  else{
const userRef = ref(db,"users/"+userId);
console.log(userId);
get(userRef)
.then((result)=>{
  if(result.exists()){
    remove(userRef)
    .then(()=>{
      alert("USER: "+ userId+"Deleted successfully !");
      myForm.reset();
    })

  }
})
.catch((error)=>{
  alert("TRY AGAIN , ERROR HAPPEND");
  
})
  }
}
myForm.addEventListener('submit',(e)=>deleteUser(e));