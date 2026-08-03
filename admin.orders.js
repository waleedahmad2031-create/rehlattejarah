// admin-orders.js

import { db } from "./firebase.js";

import {
collection,
query,
orderBy,
onSnapshot
} from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";


const ordersBox = document.getElementById("orders");


if(!ordersBox){

alert("لم يتم العثور على صندوق الطلبات");

}else{


const ordersRef = collection(db,"orders");


const q = query(ordersRef);


onSnapshot(q,(snapshot)=>{


ordersBox.innerHTML="";


if(snapshot.empty){

ordersBox.innerHTML="<p>لا توجد طلبات</p>";

return;

}


snapshot.forEach((d)=>{


let o=d.data();


ordersBox.innerHTML += `

<div class="product">

<h3>🛒 طلب جديد</h3>

<p>الاسم: ${o.name || ""}</p>

<p>الجوال: ${o.phone || ""}</p>

<p>العنوان: ${o.address || ""}</p>

<p>الطلبات: ${o.products || ""}</p>

<p>المجموع: ${o.total || 0} ريال</p>

</div>

`;

});


},(error)=>{


ordersBox.innerHTML=

"خطأ: "+error.message;


});


}
