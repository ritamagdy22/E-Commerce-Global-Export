document.addEventListener("DOMContentLoaded", () => {
  const cartItemsDiv = document.getElementById("cartItems");
  const totalPriceEl = document.getElementById("totalPrice");
  const checkoutBtn = document.getElementById("checkoutBtn");
  const popup = document.getElementById("popup");
  const popupMessage = document.getElementById("popupMessage");
  const closePopup = document.getElementById("closePopup");
  const cartCountEl = document.getElementById("cartCount");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function updateCartCount() {
    if (cartCountEl) {
      cartCountEl.textContent = cart.length;
    }
  }

  function renderCart() {
    cartItemsDiv.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      cartItemsDiv.innerHTML = "<p>Your cart is empty.</p>";
      totalPriceEl.textContent = "0.00";
      updateCartCount();
      return;
    }

    cart.forEach((item, index) => {
      total += Number(item.price);

      const div = document.createElement("div");
      div.className = "cart-item";
      div.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div>
          <h3>${item.name}</h3>
          <p>$${Number(item.price).toFixed(2)}</p>
          <button class="remove-btn" data-index="${index}">Remove</button>
        </div>
      `;
      cartItemsDiv.appendChild(div);
    });

    totalPriceEl.textContent = total.toFixed(2);
    updateCartCount();

    document.querySelectorAll(".remove-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = btn.dataset.index;
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
      return;
    }

    popupMessage.textContent = "Your order has been placed successfully!";
    localStorage.removeItem("cart");
    cart = [];
    renderCart();
    popup.style.display = "flex";

    setTimeout(() => {
      window.location.href = "../html/payment.html";
    }, 2000);
  });

  closePopup.addEventListener("click", () => {
    popup.style.display = "none";
  });
});
