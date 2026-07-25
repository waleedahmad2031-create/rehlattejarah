
!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>رحلة تجارة من الصفر</title>

<style>

body{
margin:0;
background:#f3f5f7;
font-family:Tahoma,Arial;
}

header{
background:#0066cc;
color:white;
padding:25px;
text-align:center;
}

.container{
padding:15px;
}

.card{
background:white;
padding:20px;
margin:15px 0;
border-radius:18px;
box-shadow:0 3px 10px #ccc;
}

input{
width:100%;
padding:14px;
margin:7px 0;
border-radius:10px;
border:1px solid #ddd;
font-size:16px;
}

button{
width:100%;
padding:14px;
margin-top:8px;
border:0;
border-radius:10px;
background:#008000;
color:white;
font-size:17px;
}

.delete{
background:#d00000;
}

img{
width:100%;
height:220px;
object-fit:cover;
border-radius:15px;
}

.price{
font-size:22px;
font-weight:bold;
color:#d35400;
}

</style>

</head>

<body>

<header>

<h1>رحلة تجارة من الصفر</h1>

<p>سوق المنتجات والأسعار</p>

</header>


<div class="container">


<div class="card">

<h2>إضافة منتج</h2>

<input id="name" placeholder="اسم المنتج">

<input id="price" placeholder="السعر">

<input id="city" placeholder="المدينة">

<input id="image" placeholder="رابط صورة المنتج">


<button id="save">
حفظ المنتج
</button>


</div>



<div id="list"></div>


</div>
<script type="module">

import { initializeApp }
from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";


import {

getFirestore,
collection,
addDoc,
getDocs,
doc,
updateDoc,
deleteDoc

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";



const firebaseConfig = {

apiKey:"AIzaSyCt9fXd077nuTZ696hgQaL_gn1vzRY8LHQ",

authDomain:"rehlattejarah.firebaseapp.com",

projectId:"rehlattejarah",

storageBucket:"rehlattejarah.firebasestorage.app",

messagingSenderId:"56157415045",

appId:"1:56157415045:web:b009334b4ce5d5331e2bec"

};



const app = initializeApp(firebaseConfig);

const db = getFirestore(app);



document.getElementById("save").onclick = async()=>{


let name=document.getElementById("name").value;

let price=document.getElementById("price").value;

let city=document.getElementById("city").value;

let image=document.getElementById("image").value;


await addDoc(collection(db,"prices"),{

name,
price,
city,
image,
phone:"966550496391"

});


alert("تم حفظ المنتج");

showProducts();

};



async function showProducts(){


let list=document.getElementById("list");

list.innerHTML="";


let data=await getDocs(collection(db,"prices"));



data.forEach((item)=>{


let p=item.data();

let id=item.id;



list.innerHTML += `


<div class="card">


<img src="${p.image}">


<h2>${p.name}</h2>


<p class="price">

السعر: ${p.price}

</p>


<p>

📍 ${p.city}

</p>


<a href="https://wa.me/${p.phone}" target="_blank">

<button>

تواصل واتساب

</button>

</a>



<button onclick="editProduct('${id}')">

تعديل المنتج

</button>



<button class="delete" onclick="deleteProduct('${id}')">

حذف المنتج

</button>



</div>


`;



});


}



window.editProduct = async function(id){


let name=prompt("اسم المنتج الجديد");

let price=prompt("السعر الجديد");

let city=prompt("المدينة الجديدة");

let image=prompt("رابط الصورة الجديد");


await updateDoc(doc(db,"prices",id),{

name,
price,
city,
image

});


alert("تم التعديل");

showProducts();


}




window.deleteProduct = async function(id){


let ok=confirm("هل تريد حذف المنتج؟");


if(ok){

await deleteDoc(doc(db,"prices",id));


alert("تم الحذف");

showProducts();

}


}



showProducts();


</script>


</body>

</html>