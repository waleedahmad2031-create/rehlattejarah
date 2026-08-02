import { db } from "./firebase.js";

import {
collection,
query,
orderBy,
onSnapshot
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";

const ordersBox = document.getElementById("orders");

const q = query(
collection(db,"طلبات"),
orderBy("createdAt","desc")
);

onSnapshot(q,(snapshot)=>{

ordersBox.innerHTML="";

if(snapshot.empty){

ordersBox.innerHTML="<p>لا توجد طلبات.</p>";

return;

}

snapshot.forEach(doc=>{

const o = doc.data();

ordersBox.innerHTML += `

<div class="product">

<h3>🛒 طلب جديد</h3>

<p><b>الاسم:</b> ${o.name || "-"}</p>

<p><b>الهاتف:</b> ${o.phone || "-"}</p>

<p><b>العنوان:</b> ${o.address || "-"}</p>

<p><b>الطلبات:</b> ${o.products}</p>

<p><b>الإجمالي:</b> ${o.total} ريال</p>

<p><b>الحالة:</b> ${o.status || "جديد"}</p>

</div>

`;

});

});;

