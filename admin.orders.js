// admin-orders.js


import { db } from "./firebase.js";


import {

collection,

getDocs,

updateDoc,

doc,

orderBy,

query

}

from "https://www.gstatic.com/firebasejs/12.17.0/firebase-firestore.js";



const ordersBox = document.getElementById("orders");



async function loadOrders(){


if(!ordersBox) return;



ordersBox.innerHTML="";



const q = query(

collection(db,"orders"),

orderBy("createdAt","desc")

);



const snap = await getDocs(q);



snap.forEach(item=>{


const order = item.data();



ordersBox.innerHTML += `


<div class="product">


<h3>🛒 طلب جديد</h3>


<p>
الاسم: ${order.name}
</p>


<p>
الجوال: ${order.phone}
</p>


<p>
العنوان: ${order.address}
</p>


<p>
الطلبات: ${order.products}
</p>


<p>
المجموع: ${order.total} ريال
</p>


<p>
الحالة: ${order.status}
</p>



<select onchange="changeStatus('${item.id}',this.value)">


<option value="جديد">
جديد
</option>


<option value="تم التواصل">
تم التواصل
</option>


<option value="تم التوصيل">
تم التوصيل
</option>


</select>


</div>


`;



});


}



loadOrders();


window.changeStatus = async function(id,status){


try{


await updateDoc(

doc(db,"orders",id),

{

status:status

}

);



alert("تم تحديث حالة الطلب");


loadOrders();



}

catch(error){


alert(error.message);


}



};
