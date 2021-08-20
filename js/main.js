function totalPrice() {
  const bestPrice = document.getElementById("price");
  const bestPriceValue = parseInt(bestPrice.innerText);
  const ramCost = document.getElementById("ram-cost");
  const ramCostValue = parseInt(ramCost.innerText);
  const storageCost = document.getElementById("storage-cost");
  const storageCostValue = parseInt(storageCost.innerText);
  const deliveryCost = document.getElementById("delivery-cost");
  const deliveryCostValue = parseInt(deliveryCost.innerText);
  const totalPrice = document.getElementById('total-price');
  const totalPriceValue = parseInt(totalPrice);
  const total = bestPriceValue + ramCostValue + storageCostValue + deliveryCostValue;
  totalPrice.innerText = total;
  return total;
};

function updateTotal() {
  const total = document.getElementById('total');
  total.innerText = totalPrice();
};
function promoCode() {
  const total = document.getElementById("total");
  const input = document.getElementById('input');
  const price = totalPrice();
  const inputValue = input.value;
  if (inputValue == 'stevekaku') {
    total.innerText = price - (price / 100) * 20;
    alert('Hurray You Have got 20% Discount')
  }
  else {
    total.innerText = totalPrice();
  }
}
document.getElementById('8gb-ram').addEventListener('click', function () {
    const ramCost = document.getElementById('ram-cost');
  ramCost.innerText = 0;
  totalPrice();
  updateTotal();
});
document.getElementById('16gb-ram').addEventListener('click', function () {
   const ramCost = document.getElementById("ram-cost");
  ramCost.innerText = 180;
  totalPrice();
  updateTotal();  
});
document.getElementById("256gb-ssd").addEventListener("click", function () {
  const storageCost = document.getElementById("storage-cost");
  storageCost.innerText = 0;
  totalPrice();
  updateTotal();
});
document.getElementById("512gb-ssd").addEventListener("click", function () {
  const storageCost = document.getElementById("storage-cost");
  storageCost.innerText = 100;
  totalPrice();
  updateTotal();
});
document.getElementById("1tb-ssd").addEventListener("click", function () {
  const storageCost = document.getElementById("storage-cost");
  storageCost.innerText = 180;
  totalPrice();
  updateTotal();
});
document.getElementById("free-delivery").addEventListener("click", function () {
  const deliveryCost = document.getElementById("delivery-cost");
  deliveryCost.innerText = 0;
  totalPrice();
  updateTotal();
});
document.getElementById("express-delivery").addEventListener("click", function () {
  const deliveryCost = document.getElementById("delivery-cost");
  deliveryCost.innerText = 20;
  totalPrice();
  updateTotal();
});
document.getElementById('promo').addEventListener('click',function () {
promoCode();
})