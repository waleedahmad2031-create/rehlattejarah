// orders.js

import { db } from "./firebase.js";

import {
  collection,
  addDoc,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";


// حفظ الطلب في قاعدة البيانات
export async function saveOrder(order){

try{

await addDoc(
collection(db,"طلبات"),
{
name: order.name,
phone: order.phone,
address: order.address,
products: order.products,
total: order.total,
status:"جديد",
createdAt: serverTimestamp()
}
);

alert("✅ تم حفظ الطلب");

}catch(error){

alert("خطأ: " + error.message);
console.log(error);

}

}
