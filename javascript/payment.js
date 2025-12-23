const productsTotal = parseFloat(localStorage.getItem("totalPrice")) || 0;
const shipping = 5;

document.getElementById("productsTotal").textContent = productsTotal.toFixed(2);
document.getElementById("finalTotal").textContent =
  (productsTotal + shipping).toFixed(2);

document.getElementById("payBtn").addEventListener("click", () => {
  alert("Payment successful ☕");
  localStorage.removeItem("cart");
  localStorage.removeItem("totalPrice");
  window.location.href = "coffe.html";
});
