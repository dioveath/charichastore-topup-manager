import { addFreeFireTopUp, getFreeFireTopUps } from "./firebase.js";


Refresh.addEventListener('click', async (e) => {
  var dummyTopup = {
    currency: "Diamonds",
    amount: 100,
    price: 150
  };  
  // var result = await addFreeFireTopUp(dummyTopup);
  // await addFreeFireTopUp("FreeFire", dummyTopup);

  RefreshFreeFireTopup();
  console.log("added dummy freefire topup testing...");
});


async function RefreshFreeFireTopup(){
  var topups = await getFreeFireTopUps();
  var tableBody = document.
      querySelector("#freefireTopupTable > #tableBody");
  tableBody.innerHTML = "";
  topups.forEach((topup) => {
    
    UIaddFreeFireTopup(topup);  
  });
}

function UIaddFreeFireTopup(topup){
  var SN = document.createElement("td");
  var Diamonds = document.createElement("td");
  var Price = document.createElement("td");

  Diamonds.innerHTML = topup.amount + " " + topup.currency;
  Price.innerHTML = topup.price;  

  var tableBody = document.querySelector("#freefireTopupTable > #tableBody");
  var row = document.createElement("tr");

  row.appendChild(SN);
  row.appendChild(Diamonds);
  row.appendChild(Price);
  tableBody.appendChild(row);

}

