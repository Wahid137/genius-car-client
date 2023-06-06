// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apikey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_apikey,
    storageBucket: "genius-car-project-5ad0f.appspot.com",
    messagingSenderId: "450158968119",
    appId: "1:450158968119:web:955688c0f0a913f89a2eb2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;