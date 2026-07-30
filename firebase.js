// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyCt9fXd077nuTZ696hgQaL_gn1vzRY8LHQ",
  authDomain: "rehlattejarah.firebaseapp.com",
  projectId: "rehlattejarah",
  storageBucket: "rehlattejarah.firebasestorage.app",
  messagingSenderId: "56157415045",
  appId: "1:56157415045:web:d1c496a5cdc4d5f81e2bec"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
