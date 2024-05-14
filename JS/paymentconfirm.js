const taptopay = document.querySelector(".taptoPay");
const disabled = document.querySelector(".disabled");
const paymentcontainer = document.querySelector(".payment_container_inner");
const paymentModal = document.querySelector(".payment_modal");

const cardName = document.getElementById("card_name");
const cardcvv = document.getElementById("card_cvv");
const cardnumber = document.getElementById("card_number");
const months = document.getElementById("months");
const years = document.getElementById("years");
const expiry = document.querySelector(".expiry");

let cardnumlen = 16
let cvvlen = 3

cardnumber.addEventListener('input', () => {
  if (cardnumber.value.length === cardnumlen && cardcvv.value.length === cvvlen) {
    taptopay.classList.add('display_block');
    disabled.classList.add("display_none");
  } else {
    taptopay.classList.remove('display_block');
    disabled.classList.remove("display_none");
  }
});

cardcvv.addEventListener('input', () => {
  if (cardnumber.value.length === cardnumlen && cardcvv.value.length === cvvlen) {
    taptopay.classList.add('display_block');
    disabled.classList.add("display_none");
  } else {
    taptopay.classList.remove('display_block');
    disabled.classList.remove("display_none");
  }
});
let monthvalue = "";
let yearvalue = "";
months.addEventListener("input", () => {
  monthvalue = months.value;
});
years.addEventListener("input", () => {
  yearvalue = years.value;
})
taptopay.addEventListener("click", (e) => {
  e.preventDefault();
  if(monthvalue && yearvalue){
    paymentcontainer.style.display = "none";
    setInterval(function () {
      paymentModal.style.display = "block";
    }, 1000);
  }else{
   expiry.style.display = "block";
  }
  
});





