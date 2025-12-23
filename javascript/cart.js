document.addEventListener("DOMContentLoaded", () => {
  const cartItemsDiv = document.getElementById("cartItems");
  const totalPriceEl = document.getElementById("totalPrice");
  const checkoutBtn = document.getElementById("checkoutBtn");

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  let total = 0;
  cartItemsDiv.innerHTML = "";

  if (cart.length === 0) {
    cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach(item => {
    total += item.price;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${item.image}">
      <div>
        <h3>${item.name}</h3>
        <p>$${item.price.toFixed(2)}</p>
      </div>
    `;
    cartItemsDiv.appendChild(div);
  });

  totalPriceEl.textContent = total.toFixed(2);

  checkoutBtn.addEventListener("click", () => {
    alert("Thank you for your purchase!");
    localStorage.removeItem("cart");
    window.location.href = "index.html";
  });
});
