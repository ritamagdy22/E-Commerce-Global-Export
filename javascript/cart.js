document.addEventListener("DOMContentLoaded", () => {
  const cartItemsDiv = document.getElementById("cartItems");
  const totalPriceEl = document.getElementById("totalPrice");
  const checkoutBtn = document.getElementById("checkoutBtn");
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popupMessage");
  const closePopup = document.getElementById("closePopup");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
    cartItemsDiv.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
      totalPriceEl.textContent = "0.00";
      return;
    }

    cart.forEach((item, index) => {
      total += item.price;

      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <img src="${item.image}">
        <div>
          <h3>${item.name}</h3>
          <p>$${item.price.toFixed(2)}</p>
          <button class="remove-btn" data-index="${index}">Remove</button>
        </div>
      `;
      cartItemsDiv.appendChild(div);
    });

    totalPriceEl.textContent = total.toFixed(2);

    const removeButtons = document.querySelectorAll(".remove-btn");
    removeButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = btn.getAttribute("data-index");
        cart.splice(idx, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCart();
      });
    });
  }

  renderCart();

 checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        popupMessage.textContent = "Your cart is empty!";
        popup.style.display = "flex";
    } else {
        popupMessage.textContent = "You order has been placed successfully!";
        localStorage.removeItem("cart");
        cart = [];
        renderCart();
        popup.style.display = "flex";

        // Redirect to payment page after 2 seconds
        setTimeout(() => {
            window.location.href = "../html/payment.html";
        }, 2000); // 2000ms = 2 seconds
    }
});


  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });
});
