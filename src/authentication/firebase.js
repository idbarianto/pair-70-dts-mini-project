
// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword,
    sendPasswordResetEmail, 
    signOut
} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyD3iBPj2kkT7blDZfYerRBmFsUWZBo1F4c",
    authDomain: "development-c7fec.firebaseapp.com",
    databaseURL: "https://development-c7fec-default-rtdb.firebaseio.com",
    projectId: "development-c7fec",
    storageBucket: "development-c7fec.appspot.com",
    messagingSenderId: "994938340377",
    appId: "1:994938340377:web:44ccc2e15789740318d688",
    measurementId: "G-N0YMGH1YZH"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);



const auth = getAuth(app);

// promise
const registerEmailDanPassword = async (email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log("User yg terregis dan berhasil login adalah", res.user)
    } catch(err) {
        console.log(err)
        console.log("Error code", err.code)
        console.log("Error code", err.message)
    }
}

// promise
const loginEmailDanPassword = async (email, password) => {
    try {
        const res = await signInWithEmailAndPassword(auth, email, password);
        console.log("User yg terregis dan berhasil login adalah", res.user)
    } catch (err) {
        console.log(err)
        console.log("Error code", err.code)
        console.log("Error code", err.message)
    }
}

// promise
const resetPassword = async (email) => {

    try {
        const res = await sendPasswordResetEmail(auth, email);
        console.log("User yg terregis dan berhasil login adalah", res.user)
    } catch (err) {
        console.log(err)
        console.log("Error code", err.code)
        console.log("Error code", err.message)
    }
}


// promise
const keliarAplikasi = async () => {
    try {
        const res = await signOut(auth);
        console.log("User yg terregis dan berhasil login adalah", res.user)
    } catch (err) {
        console.log(err)
        console.log("Error code", err.code)
        console.log("Error code", err.message)
    }
}


export {
    auth, registerEmailDanPassword, loginEmailDanPassword, resetPassword, keliarAplikasi
}

