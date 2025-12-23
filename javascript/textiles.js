/*************************
 * FETCH TEXTILES FROM SHEET.BEST
 *************************/
const API_URL = "https://api.sheetbest.com/sheets/57256c0b-27aa-40e4-a71b-8c3ba0c1ad6f";

const grid = document.getElementById("productsGrid");
const cartCount = document.getElementById("cartCount");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    // 👉 filter TEXTILES only
    const textiles = data.filter(item => item.category === "textile");

    textiles.forEach(item => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="product-content">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="product-footer">
            <span>$${item.price}</span>
            <i class="fas fa-cart-plus"></i>
          </div>
        </div>
      `;

      card.querySelector("i").addEventListener("click", () => {
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
      });

      grid.appendChild(card);
    });
  })
  .catch(err => {
    console.error("Error loading textiles:", err);
  });

/*************************
 * CART COUNT
 *************************/
function updateCartCount() {
  cartCount.textContent = cart.length;
}
