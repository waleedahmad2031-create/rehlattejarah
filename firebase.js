// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";

import { 
getFirestore 
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";


import {
getAuth
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";


// إعدادات Firebase
const firebaseConfig = {

apiKey: "ضع_apiKey_هنا",

authDomain: "ضع_authDomain_هنا",

projectId: "ضع_projectId_هنا",

storageBucket: "ضع_storageBucket_هنا",

messagingSenderId: "ضع_messagingSenderId_هنا",

appId: "ضع_appId_هنا"

};


// تشغيل Firebase

const app = initializeApp(firebaseConfig);


// قاعدة البيانات

export const db = getFirestore(app);


// تسجيل الدخول

export const auth = getAuth(app);
