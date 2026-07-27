<!DOCTYPE html>
<html lang="ar" dir="rtl">

<head>

<meta charset="UTF-8">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>رحلة تجارة من الصفر</title>

<style>

body{
margin:0;
padding:0;
background:#f2f2f2;
font-family:Arial;
}

header{
background:#0066cc;
color:white;
padding:20px;
font-size:28px;
text-align:center;
font-weight:bold;
}

.container{
width:95%;
max-width:700px;
margin:auto;
margin-top:20px;
}

.card{
background:white;
padding:15px;
margin-bottom:15px;
border-radius:10px;
box-shadow:0 0 10px rgba(0,0,0,.15);
}

input{
width:100%;
padding:12px;
margin-top:8px;
margin-bottom:8px;
font-size:16px;
border:1px solid #ccc;
border-radius:6px;
box-sizing:border-box;
}

button{
width:100%;
padding:12px;
background:#0066cc;
color:white;
border:none;
border-radius:6px;
font-size:18px;
cursor:pointer;
}

button:hover{
background:#004fa3;
}

.product{
background:white;
padding:12px;
margin-top:15px;
border-radius:10px;
box-shadow:0 0 8px rgba(0,0,0,.1);
}

.product img{
width:100%;
border-radius:8px;
margin-bottom:10px;
}

.action{
margin-top:10px;
display:flex;
gap:10px;
}

.action button{
flex:1;
}

.delete{
background:#d9534f;
}

.edit{
background:#198754;
}

</style>

</head>

<body>

<header>

رحلة تجارة من الصفر

</header>

<div class="container">

<div class="card">

<h2>إضافة منتج</h2>

<input id="name" placeholder="اسم المنتج">

<input id="price" placeholder="السعر">

<input id="city" placeholder="المدينة">

<input id="phone" placeholder="رقم الهاتف">

<input id="image" placeholder="رابط الصورة">

<button id="saveBtn">

حفظ المنتج

</button>

</div>

<div class="card">

<h2>البحث</h2>

<input id="search" placeholder="ابحث عن منتج">

</div>

<div class="card">

<h2>المنتجات</h2>

<div id="products">

جاري تحميل المنتجات...

</div>

</div>

</div>
<script type="module">

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
getFirestore,
collection,
addDoc,
getDocs,
deleteDoc,
doc,
updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "AIzaSyCt9fXd077nuTZ696hgQaL_gn1vzRY8LHQ",

authDomain: "rehlattejarah.firebaseapp.com",

projectId: "rehlattejarah",

storageBucket: "rehlattejarah.firebasestorage.app",

messagingSenderId: "56157415045",

appId: "1:56157415045:web:b009334b4ce5d5331e2bec"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

let editId = null;
async function loadProducts(){

const products=document.getElementById("products");
products.innerHTML="";

const querySnapshot=await getDocs(collection(db,"products"));

querySnapshot.forEach((item)=>{

const data=item.data();

products.innerHTML+=`

<div class="product">

<img src="${data.image}" onerror="this.style.display='none'">

<h3>${data.name}</h3>

<p>💰 السعر: ${data.price}</p>

<p>📍 المدينة: ${data.city}</p>

<p>📞 الهاتف: ${data.phone}</p>

<div class="action">

<button class="edit"
onclick="editProduct('${item.id}',
'${data.name}',
'${data.price}',
'${data.city}',
'${data.phone}',
'${data.image}')">

تعديل

</button>

<button class="delete"
onclick="deleteProduct('${item.id}')">

حذف

</button>

</div>

</div>

`;

});

}

document.getElementById("saveBtn").onclick=async()=>{

const name=document.getElementById("name").value;

const price=document.getElementById("price").value;

const city=document.getElementById("city").value;

const phone=document.getElementById("phone").value;

const image=document.getElementById("image").value;

if(name==""||price==""){
alert("أدخل اسم المنتج والسعر");
return;
}

if(editId==null){

await addDoc(collection(db,"products"),{

name,
price,
city,
phone,
image

});

}else{

await updateDoc(doc(db,"products",editId),{

name,
price,
city,
phone,
image

});

editId=null;

document.getElementById("saveBtn").innerHTML="حفظ المنتج";

}

loadProducts();

document.getElementById("name").value="";
document.getElementById("price").value="";
document.getElementById("city").value="";
document.getElementById("phone").value="";
document.getElementById("image").value="";

};
document.getElementById("search").onkeyup=function(){

let value=this.value.toLowerCase();

let items=document.getElementsByClassName("product");

for(let i=0;i<items.length;i++){

if(items[i].innerText.toLowerCase().includes(value)){

items[i].style.display="block";

}else{

items[i].style.display="none";

}

}

}

window.deleteProduct=async function(id){

if(confirm("هل تريد حذف المنتج؟")){

await deleteDoc(doc(db,"products",id));

loadProducts();

}

}

window.editProduct=function(id,name,price,city,phone,image){

editId=id;

document.getElementById("name").value=name;

document.getElementById("price").value=price;

document.getElementById("city").value=city;

document.getElementById("phone").value=phone;

document.getElementById("image").value=image;

document.getElementById("saveBtn").innerHTML="حفظ التعديل";

}

loadProducts();

</script>

</body>
</html>
