// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
const analytics = getAnalytics(app);