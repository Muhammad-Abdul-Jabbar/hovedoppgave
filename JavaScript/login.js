  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
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
 
var email = document.getElementById("email");
var password = document.getElementById("password");
window.login= function(e) {
  e.preventDefault();
  var obj = {
    email: email.value,
    password: password.value,
  };

  signInWithEmailAndPassword(auth, obj.email, obj.password)
    .then(function (success) { 
      var aaaa =  (success.user.uid);
      localStorage.setItem("uid",aaaa)
      console.log(aaaa)
      window.location.href = "hovedside.html";
     // localStorage.setItem(success,user,uid)
      
    })
    .catch(function (err) {
      alert("login error"+err);
    });

  console.log(obj);
}