
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyARM8FznTE6ImacxWuJL5mn09szgnlSwcQ",
    authDomain: "test-a1849.firebaseapp.com",
    projectId: "test-a1849",
    storageBucket: "test-a1849.appspot.com",
    messagingSenderId: "799317876825",
    appId: "1:799317876825:web:e2d68fe775b772918b1148",
    measurementId: "G-DKX4DBGTZE"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

const auth = getAuth()

var firstname = document.getElementById("firstname")
var lastname = document.getElementById("lastname")
var email = document.getElementById("Email")
var password = document.getElementById("password")

window.signup = function(e){
   e.preventDefault();
   var obj = {
       firstname:firstname.value,
       lastname:lastname.value,
       email:email.value,
       password:password.value,
   }
   createUserWithEmailAndPassword(auth, obj.email,obj.password)
   .then(function(success){
       window.location.href = "tos1.html";
   })
   .catch(function(err){
       alert("error" + err)
   }) 
   console.log(obj)
}; 


