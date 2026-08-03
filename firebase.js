// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";

import { 
  getFirestore 
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

import {
  getAuth
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";


// إعدادات Firebase الحقيقية

const firebaseConfig = {

  apiKey: "AIzaSyCt9fXd077nuTZ696hgQaL_gn1vzRY8LHQ",

  authDomain: "rehlattejarah.firebaseapp.com",

  databaseURL: "https://rehlattejarah-default-rtdb.firebaseio.com",

  projectId: "rehlattejarah",

  storageBucket: "rehlattejarah.firebasestorage.app",

  messagingSenderId: "56157415045",

  appId: "1:56157415045:web:34528a4cb34501261e2bec"

};


// تشغيل Firebase

const app = initializeApp(firebaseConfig);


// Firestore

export const db = getFirestore(app);


// Authentication

export const auth = getAuth(app);
