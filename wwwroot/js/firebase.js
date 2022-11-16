// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import {
    getAuth,
    signInWithPhoneNumber,
    RecaptchaVerifier,
    PhoneAuthProvider,
    signInWithCredential,
    onAuthStateChanged,
    getIdToken,
    PhoneAuthCredential,
    applyActionCode
} from "../firebase/firebase-auth.js";
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

// Element
const signInWithPhoneButton = document.getElementById('signInWithPhoneButton');
const getCodeButton = document.getElementById('getCode');
const phoneNumberText = document.getElementById('phoneNumber');
const verifyCodeTextBox = document.getElementById('verifyCode');
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

let confirmResult;

window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);
recaptchaVerifier.render().then(widgetId => {
    window.recaptchaWidgetId = widgetId;
});

const sendVerificationCode = () => {
    const phoneNumber = phoneNumberText.value;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier).then(confirmationResult => {
        const sentCodeId = confirmationResult.verificationId;
        confirmResult = confirmationResult;
        
        window.confirmationResult = confirmationResult;
        console.log(confirmationResult);
        signInWithPhoneButton.addEventListener('click', () => signInWithPhone(sentCodeId));
    }).catch(error => {
        console.log(error);
    });
}

getCodeButton.addEventListener('click', () => sendVerificationCode());

const signInWithPhone = sentCodeId => {
    const code = verifyCodeTextBox.value;
    confirmResult.confirm(code).then((result) => {
        const user = result.user;
        console.log(result);
    })

    //const code = verifyCodeTextBox.value;
    //console.log({ sentCodeId, code });
    //const credential = PhoneAuthProvider.credential(sentCodeId, code);
    //console.log(credential);

    //onAuthStateChanged(auth, (user) => {
    //    if (user) {
    //        console.log(user);
    //    }
    //    else {
    //        console.log(user);
    //        console.log('User signed out');
    //    }
    //});

    //PhoneAuthCredential(credential).then(() => { }).catch(error => {
    //    console.log(error);
    //});
    //signInWithCredential(credential)
    //    .then(() => {
    //        /* window.location.assign('./privacy');*/
    //    })
    //    .catch(error => {
    //        console.log(error);
    //    });
};
