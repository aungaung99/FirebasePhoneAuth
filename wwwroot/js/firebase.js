// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAuth, signInWithPhoneNumber } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCe_QdshjsXsf_ophtKnQZyKog6RC15Pmw",
    authDomain: "phoneauth-ec2d3.firebaseapp.com",
    projectId: "phoneauth-ec2d3",
    storageBucket: "phoneauth-ec2d3.appspot.com",
    messagingSenderId: "545262679664",
    appId: "1:545262679664:web:d58eb6e6e8b9a1577c26b5",
    measurementId: "G-JVGDM7TVWE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'mm';

const phoneNumber = "+959885171061s";
const appVerifier = window.recaptchaVerifier;
appVerifier.verfiy();
signInWithPhoneNumber(auth, phoneNumber, appVerifier)
    .then((confirmationResult) => {
        console.log('Hello');
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        //window.confirmationResult = confirmationResult;
        //console.log(confirmationResult);
        // ...
    }).catch((error) => {
        console.error('Error', error.message);
        // Error; SMS not sent
        // ...
    });
