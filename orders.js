orders.js

import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

// حفظ الطلب
export async function saveOrder(order) {

  try {
    const orderNumber = "SM-" + Math.floor(100000 + Math.random() * 900000);
    await addDoc(collection(db, "orders"), {

      products: order.products,

      total: Number(order.total),

      status: "جديد",

      createdAt: serverTimestamp()

    });

    return true;

  } catch (error) {

    console.error("خطأ حفظ الطلب:", error);

    alert("حدث خطأ أثناء حفظ الطلب");

    return false
