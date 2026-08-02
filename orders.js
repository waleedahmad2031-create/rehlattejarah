// orders.js

import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

// حفظ الطلب
export async function saveOrder(order) {

  try {

    await addDoc(collection(db, "orders"), {

      name: order.name,
      phone: order.phone,
      address: order.address,

      products: order.products,

      total: Number(order.total),

      status: "جديد",

      createdAt: serverTimestamp()

    });

    return true;

  } catch (error) {

    console.error("خطأ حفظ الطلب:", error);

    alert("حدث خطأ أثناء حفظ الطلب");

    return false;

  }

}
