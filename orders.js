// orders.js

import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

export async function saveOrder(order) {

  try {

    await addDoc(collection(db, "orders"), {

      products: order.products,

      total: Number(order.total),

      status: "جديد",

      createdAt: serverTimestamp()

    });

    return true;

  } catch (error) {

    console.error(error);

    alert(error.message);

    return false;

  }

}
