// admin-orders.js

import { db } from "./firebase.js";

import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

const ordersBox = document.getElementById("orders");

const ordersRef = collection(db, "orders");

const q = query(ordersRef, orderBy("createdAt", "desc"));

onSnapshot(q, (snapshot) => {

  ordersBox.innerHTML = "";

  if (snapshot.empty) {
    ordersBox.innerHTML = "<p>لا توجد طلبات حالياً.</p>";
    return;
  }

  snapshot.forEach((item) => {

    const o = item.data();

    ordersBox.innerHTML += `

    <div class="product">

      <h3>🛒 طلب جديد</h3>

      <p><b>الاسم:</b> ${o.name || "-"}</p>

      <p><b>الجوال:</b> ${o.phone || "-"}</p>

      <p><b>العنوان:</b> ${o.address || "-"}</p>

      <p><b>الطلبات:</b> ${o.products || "-"}</p>

      <p><b>الإجمالي:</b> ${o.total || 0} ريال</p>

      <p><b>الحالة:</b> ${o.status || "جديد"}</p>

      <button onclick="changeStatus('${item.id}')">
      ✅ تم التوصيل
      </button>

    </div>

    `;

  });

});

window.changeStatus = async function(id){

  await updateDoc(doc(db,"orders",id),{

    status:"تم التوصيل"

  });

};
