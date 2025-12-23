const coffeeAPI = [
  {
    id: 1,
    name: "Ethiopian Yirgacheffe",
    description: "Floral aroma with jasmine notes and bright citrus acidity",
    price: 19.80,
    region: "Ethiopia",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Colombian Supremo",
    description: "Well-balanced cup with caramel sweetness and smooth finish",
    price: 16.50,
    region: "Colombia",
    image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Brazil Santos",
    description: "Low acidity coffee with nutty, chocolatey flavors",
    price: 14.75,
    region: "Brazil",
    image: "https://images.unsplash.com/photo-1445077100181-a33e9ac94db0?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Kenya AA",
    description: "Bold body with berry, wine-like acidity and rich aroma",
    price: 19.25,
    region: "Kenya",
    image: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Guatemala Antigua",
    description: "Full-bodied coffee with cocoa, spice, and smoky notes",
    price: 17.40,
    region: "Guatemala",
    image:"https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Costa Rica Tarrazú",
    description: "Clean and crisp flavor with honey sweetness and citrus finish",
    price: 18.10,
    region: "Costa Rica",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Sumatra Mandheling",
    description: "Earthy, herbal coffee with heavy body and low acidity",
    price: 20.00,
    region: "Indonesia",
    image: "https://images.unsplash.com/photo-1507914372368-b2b085b925a1?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "Yemen Mocha",
    description: "Complex coffee with deep chocolate and dried fruit notes",
    price: 22.50,
    region: "Yemen",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80"
  }
];


document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("productsGrid");
  updateCartCount();

  coffeeAPI.forEach(coffee => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${coffee.image}" class="product-img">
      <div class="product-content">
        <h3>${coffee.name}</h3>
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