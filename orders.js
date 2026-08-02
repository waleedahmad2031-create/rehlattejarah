// orders.js

import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";


// حفظ الطلب في قاعدة البيانات
export async function saveOrder(orderData) {

  try {

    await addDoc(collection(db, "طلبات"), {

      name: orderData.name,
      phone: orderData.phone,
      address: orderData.address,
      products: orderData.products,
      total: orderData.total,

      status: "جديد",

      createdAt: serverTimestamp()

    });


    console.log("تم حفظ الطلب بنجاح");

  } catch (error) {

    console.log("خطأ في حفظ الطلب:", error);

  }

}
