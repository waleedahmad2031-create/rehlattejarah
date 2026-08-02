import { db } from "./firebase.js";

import {
collection,
onSnapshot
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

const ordersBox = document.getElementById("orders");

function loadOrders(name){

onSnapshot(collection(db, name), (snapshot)=>{

if(!snapshot.empty){

ordersBox.innerHTML = "";

snapshot.forEach(doc=>{

const o = doc.data();

ordersBox.innerHTML += `
<div class="product">
<h3>🛒 طلب جديد</h3>
<p><b>الاسم:</b> ${o.name || "-"}</p>
<p><b>الهاتف:</b> ${o.phone || "-"}</p>
<p><b>العنوان:</b> ${o.address || "-"}</p>
<p><b>الطلبات:</b> ${o.products || "-"}</p>
<p><b>الإجمالي:</b> ${o.total || 0} ريال</p>
<p><b>الحالة:</b> ${o.status || "جديد"}</p>
</div>
`;

});

}

});

}

loadOrders("orders");
loadOrders("طلبات");
