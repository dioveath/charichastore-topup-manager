import { addFreeFireTopUp, getFreeFireTopUps } from "./firebase.js";


RefreshFreeFireTopup();

Refresh.addEventListener('click', async (e) => {
  // var dummyTopup = {
  //   currency: "Diamonds 💎",
  //   amount: 5600,
  //   price: 6300
  // };
  
  // var result = await addFreeFireTopUp(dummyTopup);
  // await addFreeFireTopUp("FreeFire", dummyTopup);

  // console.log("added dummy freefire topup testing...");

  RefreshFreeFireTopup();
  console.log("refreshing...!");
});


async function RefreshFreeFireTopup(){
  var topups = await getFreeFireTopUps();
  var tableBody = document.querySelector("#freefireTopupTable > #tableBody");
  tableBody.innerHTML = "";
  var sn = 1;
  topups.forEach((topup) => {
    UIaddFreeFireTopup(topup, sn);  
    sn++;
  });
}

function UIaddFreeFireTopup(topup, sn){
  var SN = document.createElement("td");
  var Diamonds = document.createElement("td");
  var Price = document.createElement("td");

  SN.innerHTML = sn;
  Diamonds.innerHTML = topup.amount + " " + topup.currency;
  Price.innerHTML = "Rs. " + topup.price;  

  var tableBody = document.querySelector("#freefireTopupTable > #tableBody");
  var row = document.createElement("tr");

  row.appendChild(SN);
  row.appendChild(Diamonds);
  row.appendChild(Price);
  tableBody.appendChild(row);

}

