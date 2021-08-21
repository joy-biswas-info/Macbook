// Calculet total price
function totalPrice() {
  const bestPrice = document.getElementById("price");
  const bestPriceValue = parseInt(bestPrice.innerText);
  const ramCost = document.getElementById("ram-cost");
  const ramCostValue = parseInt(ramCost.innerText);
  const storageCost = document.getElementById("storage-cost");
  const storageCostValue = parseInt(storageCost.innerText);
  const deliveryCost = document.getElementById("delivery-cost");
  const deliveryCostValue = parseInt(deliveryCost.innerText);
  const totalPrice = document.getElementById("total-price");
  const totalPriceValue = parseInt(totalPrice);
  const total =
    bestPriceValue + ramCostValue + storageCostValue + deliveryCostValue;
  totalPrice.innerText = total;
  return total;
}

// Update price
function updateTotal() {
  const total = document.getElementById("total");
  total.innerText = totalPrice();
}

// Apply promoCode
function promoCode() {
  const total = document.getElementById("total");
  const input = document.getElementById("input");
  const discount = document.getElementById("discount");
  const price = totalPrice();
  const inputValue = input.value;
  if (inputValue == "stevekaku") {
    total.innerText = price - (price / 100) * 20;
    // Show Discount
    discount.style.display = "block";
    input.value = "";
  } else {
    total.innerText = totalPrice();
    discount.style.display = "none";
    input.value = "";
  }
}
// To defain Selected Element
function selecded(elem) {
  return elem.classList.contains("selected");
}

// Event For Ram Customization
const ram8Gb = document.getElementById("8gb-ram");
const ram16Gb = document.getElementById("16gb-ram");
const ramCost = document.getElementById("ram-cost");
ram8Gb.addEventListener("click", function () {
  ramCost.innerText = 0;
  // defain selected Option
  if (!selecded(ram8Gb)) {
    ram8Gb.classList.add("selected");
    ram16Gb.classList.remove("selected");
  }
  totalPrice();
  updateTotal();
});
ram16Gb.addEventListener("click", function () {
  ramCost.innerText = 180;
  // defain selected Option
  if (!selecded(ram16Gb)) {
    ram16Gb.classList.add("selected");
    ram8Gb.classList.remove("selected");
  }
  totalPrice();
  updateTotal();
});

// event for Storage Customization
const ssd256Gb = document.getElementById("256gb-ssd");
const ssd512Gb = document.getElementById("512gb-ssd");
const ssd1Tb = document.getElementById("1tb-ssd");
const storageCost = document.getElementById("storage-cost");
ssd256Gb.addEventListener("click", function () {
  storageCost.innerText = 0;
  // defain selected Option
  if (!selecded(ssd256Gb)) {
    ssd256Gb.classList.add("selected");
    ssd512Gb.classList.remove("selected");
    ssd1Tb.classList.remove("selected");
  }
  totalPrice();
  updateTotal();
});
ssd512Gb.addEventListener("click", function () {
  storageCost.innerText = 100;
  // defain selected Option
  if (!selecded(ssd512Gb)) {
    ssd512Gb.classList.add("selected");
    ssd256Gb.classList.remove("selected");
    ssd1Tb.classList.remove("selected");
  }
  totalPrice();
  updateTotal();
});
ssd1Tb.addEventListener("click", function () {
  storageCost.innerText = 180;
  // defain selected Option
  if (!selecded(ssd1Tb)) {
    ssd512Gb.classList.remove("selected");
    ssd256Gb.classList.remove("selected");
    ssd1Tb.classList.add("selected");
  }
  totalPrice();
  updateTotal();
});

// Event For Delivery Option Customization
const freeDelivery = document.getElementById("free-delivery");
const expressDelivery = document.getElementById("express-delivery");
const deliveryCost = document.getElementById("delivery-cost");
freeDelivery.addEventListener("click", function () {
  deliveryCost.innerText = 0;
  if (!selecded(freeDelivery)) {
    freeDelivery.classList.add("selected");
    expressDelivery.classList.remove("selected");
  }
  totalPrice();
  updateTotal();
});

expressDelivery.addEventListener("click", function () {
  deliveryCost.innerText = 20;
  if (!selecded(expressDelivery)) {
    freeDelivery.classList.remove("selected");
    expressDelivery.classList.add("selected");
  }
  totalPrice();
  updateTotal();
});

// Event For apply Promo Code
document.getElementById("promo").addEventListener("click", function () {
  promoCode();
});
