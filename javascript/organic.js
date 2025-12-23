/*************************
 * FETCH SPICES FROM SHEET.BEST
 *************************/
const API_URL = "https://api.sheetbest.com/sheets/14f97587-82a8-48f7-a106-c1beb14e7435";

const productsGrid = document.getElementById("productsGrid");
const cartCount = document.getElementById("cartCount");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
cartCount.textContent = cart.length;

fetch(API_URL)
  .then(res => res.json())
  .then(data => {
    // 👉 get SPICES only
    const spices = data.filter(item => item.category === "spices");

    spices.forEach(spice => {
      const card = document.createElement("div");
      card.className = "product-card";

      card.innerHTML = `
        <img src="${spice.image}" alt="${spice.name}">
        <h3>${spice.name}</h3>
        <p>$${Number(spice.price).toFixed(2)}</p>
        <button>Add to Cart</button>
      `;

      card.querySelector("button").addEventListener("click", () => {
        cart.push(spice);
        localStorage.setItem("cart", JSON.stringify(cart));
        cartCount.textContent = cart.length;
      });

      productsGrid.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error loading spices:", error);
  });
