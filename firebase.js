// firebase.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.17.0/firebase-auth.js";

const firebaseConfig = {

  apiKey: "هنا_apiKey_الحقيقي",

  authDomain: "هنا_authDomain_الحقيقي",

  projectId: "هنا_projectId_الحقيقي",

  storageBucket: "هنا_storageBucket_الحقيقي",

  messagingSenderId: "هنا_messagingSenderId_الحقيقي",

  appId: "هنا_appId_الحقيقي"

};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);
