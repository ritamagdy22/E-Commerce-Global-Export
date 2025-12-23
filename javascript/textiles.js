/*************************
 * TEXTILES DATA
 *************************/
const textilesAPI = [
  {
    id: 101,
    name: "Egyptian Cotton",
    description: "Premium long-staple cotton fabric",
    price: 25.99,
    image: "https://tse3.mm.bing.net/th/id/OIP.3kSg63xoG7Nsx5HzOkaD0AHaHa?pid=Api&P=0&w=300&h=300s"
  },
  {
    id: 102,
    name: "Silk Fabric",
    description: "Luxurious natural silk material",
    price: 45.50,
    image: "https://tse3.mm.bing.net/th/id/OIP.zK-aNLRWVdhWy3O46jg7agHaHa?pid=Api&P=0&w=300&h=300"
  },
  {
    id: 103,
    name: "Linen Textile",
    description: "Breathable and durable linen fabric",
    price: 19.75,
    image: "https://d1fufvy4xao6k9.cloudfront.net/images/blog/posts/2024/06/hockerty_loosely-woven_linen_loosely-woven_linen_is_highly_ab_ffb7da4f-678a-4977-87f7-5d0d3fc388b5_2.jpg"
  },
  {
    id: 104,
    name: "Denim Fabric",
    description: "Heavy-duty blue denim textile",
    price: 22.30,
    image: "https://m.media-amazon.com/images/I/81eFzKfSZlL._AC_SL1140_.jpg"
  }
];

/*************************
 * RENDER PRODUCTS
 *************************/
const grid = document.getElementById("productsGrid");
const cartCount = document.getElementById("cartCount");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();

textilesAPI.forEach(item => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${item.image}">
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

/*************************
 * CART COUNT
 *************************/
function updateCartCount() {
  cartCount.textContent = cart.length;
}
