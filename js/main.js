// converter
function converter(id) {
  const text = document.getElementById(id);
  const value = parseInt(text.innerText);
  return value;
}

// Calculet total price
function totalPrice() {
  const bestPrice = converter("price");
  const ramCost = converter("ram-cost");
  const storageCost = converter("storage-cost");
  const deliveryCost = converter("delivery-cost");
  const totalPrice = document.getElementById("total-price");
  const total = bestPrice + ramCost + storageCost + deliveryCost;
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
// To Define Selected Element
function selected(elem) {
  return elem.classList.contains("selected");
}

// Event For Ram Customization
// Get Elements for RAM 
const ram8Gb = document.getElementById("8gb-ram");
const ram16Gb = document.getElementById("16gb-ram");
const ramCost = document.getElementById("ram-cost");
ram8Gb.addEventListener("click", function () {
  ramCost.innerText = 0;
  // Define selected Option
  if (!selected(ram8Gb)) {
    ram8Gb.classList.add("selected");
    ram16Gb.classList.remove("selected");
  }
  // Update-Price 
  totalPrice();
  updateTotal();
});
ram16Gb.addEventListener("click", function () {
  ramCost.innerText = 180;
  // Define selected Option
  if (!selected(ram16Gb)) {
    ram16Gb.classList.add("selected");
    ram8Gb.classList.remove("selected");
  }
  // Update-Price
  totalPrice();
  updateTotal();
});

// event for Storage Customization
// Get Elements For Storage
const ssd256Gb = document.getElementById("256gb-ssd");
const ssd512Gb = document.getElementById("512gb-ssd");
const ssd1Tb = document.getElementById("1tb-ssd");
const storageCost = document.getElementById("storage-cost");
// Event 
ssd256Gb.addEventListener("click", function () {
  storageCost.innerText = 0;
  // Define selected Option
  if (!selected(ssd256Gb)) {
    ssd256Gb.classList.add("selected");
    ssd512Gb.classList.remove("selected");
    ssd1Tb.classList.remove("selected");
  }
  // Update-Price
  totalPrice();
  updateTotal();
});
// Event
ssd512Gb.addEventListener("click", function () {
  storageCost.innerText = 100;
  // Define selected Option
  if (!selected(ssd512Gb)) {
    ssd512Gb.classList.add("selected");
    ssd256Gb.classList.remove("selected");
    ssd1Tb.classList.remove("selected");
  }
  // Update-Price
  totalPrice();
  updateTotal();
});
// Event
ssd1Tb.addEventListener("click", function () {
  storageCost.innerText = 180;
  // Define selected Option
  if (!selected(ssd1Tb)) {
    ssd512Gb.classList.remove("selected");
    ssd256Gb.classList.remove("selected");
    ssd1Tb.classList.add("selected");
  }
  // Update-Price
  totalPrice();
  updateTotal();
});

// Event For Delivery Option Customization
// Get Elements For Delivery 
const freeDelivery = document.getElementById("free-delivery");
const expressDelivery = document.getElementById("express-delivery");
// Event
const deliveryCost = document.getElementById("delivery-cost");
freeDelivery.addEventListener("click", function () {
  deliveryCost.innerText = 0;
  if (!selected(freeDelivery)) {
    freeDelivery.classList.add("selected");
    expressDelivery.classList.remove("selected");
  }
  // Update-Price
  totalPrice();
  updateTotal();
});
// Event
expressDelivery.addEventListener("click", function () {
  deliveryCost.innerText = 20;
  if (!selected(expressDelivery)) {
    freeDelivery.classList.remove("selected");
    expressDelivery.classList.add("selected");
  }
  // Update-Price
  totalPrice();
  updateTotal();
});

// Event For apply Promo Code
document.getElementById("promo").addEventListener("click", function () {
  // Apply-Promo_Code
  promoCode();
});
