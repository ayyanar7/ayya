import { initializeApp } from 'firebase/app'
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAlM91aSkiPloG_N5XX1IkhSPET0etkz_I",
    authDomain: "otp-auth-login.firebaseapp.com",
    projectId: "otp-auth-login",
    storageBucket: "otp-auth-login.appspot.com",
    messagingSenderId: "806361939720",
    appId: "1:806361939720:web:70b6e0e2a95c186463b6bd"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authentication = getAuth(app);