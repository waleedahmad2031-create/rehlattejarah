// admin-orders.js

import { db } from "./firebase.js";

import {
  collection,
  getDocs,
  orderBy,
  query
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


const ordersList = document.getElementById("ordersList");


async function loadOrders(){

  const q = query(
    collection(db,"orders"),
    orderBy("createdAt","desc")
  );


  const snapshot = await getDocs(q);


  ordersList.innerHTML = "";


  snapshot.forEach((doc)=>{


    let order = doc.data();


    ordersList.innerHTML += `

    <tr>

    <td>${order.name}</td>

    <td>${order.phone}</td>

    <td>${order.products}</td>

    <td>${order.total} ريال</td>

    <td>${order.status}</td>

    </tr>

    `;


  });


}


loadOrders();
