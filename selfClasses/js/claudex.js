//VARIABLES 
//Situation 1 
let product ="iphone 15"
let price=80000;
let discount=0.10;
let gst=0.18;
let quantity =2;
let subtotal=quantity*price;
let gstamount=price*gst;
let totalwithgst=subtotal+gstamount;
let discountamount=totalwithgst*discount;
let finalprice= totalwithgst- discountamount
console.log( finalprice)

