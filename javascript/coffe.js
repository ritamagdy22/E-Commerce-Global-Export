const API_URL = "https://api.sheetbest.com/sheets/14f97587-82a8-48f7-a106-c1beb14e7435";

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("productsGrid");
  updateCartCount();

  fetch(API_URL)
    .then(res => res.json())
    .then(products => {
      grid.innerHTML = "";

      // ✅ FILTER COFFEE ONLY
      const coffees = products.filter(
        item => item.category === "coffee"
      );

      coffees.forEach(coffee => {
        // hide out of stock
        if (coffee.stock === "no") return;

        const card = document.createElement("div");
        card.className = "product-card";

        card.innerHTML = `
          <img src="${coffee.image}" class="product-img" alt="${coffee.name}">
          <div class="product-content">
            <h3>${coffee.name}</h3>
            <p class="description">${coffee.description}</p>
            <div class="price">$${coffee.price}</div>
            <button class="add-cart">
              <i class="fas fa-cart-plus"></i> Add to Cart
            </button>
          </div>
        `;

        card.querySelector(".add-cart").addEventListener("click", () => {
          addToCart(coffee);
        });

        grid.appendChild(card);
      });
    })
    .catch(err => console.error("API Error:", err));
});

// CART FUNCTIONS
function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cartCount").textContent = cart.length;
}
