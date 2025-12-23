const spicesAPI = [
  {
    id: 201,
    name: "Organic Turmeric Powder",
    price: 6.99,
    image: "https://tse1.mm.bing.net/th/id/OIP.hfdN_8wyqXCDpZkQVDvTfwHaJs?pid=Api&P=0&w=300&h=300"
  },
  {
    id: 202,
    name: "Ceylon Cinnamon Sticks",
    price: 8.50,
    image: "https://tse2.mm.bing.net/th/id/OIP.mPSmm4LEKFeEOdqCTbKmjAHaEK?pid=Api&P=0&w=300&h=300"
  },
  {
    id: 203,
    name: "Organic Black Pepper",
    price: 7.75,
    image: "https://tse3.mm.bing.net/th/id/OIP.EoASQLbxbZMhsJEtiNFNnwHaHa?pid=Api&P=0&w=300&h=300"
  },
  {
    id: 204,
    name: "Ground Cumin",
    price: 5.99,
    image: "https://tse3.mm.bing.net/th/id/OIP.X6CFg9PtVGE-rwYs9C9dsgHaHa?pid=Api&P=0&w=300&h=300"
  }
];

const productsGrid = document.getElementById("productsGrid");
const cartCount = document.getElementById("cartCount");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
cartCount.textContent = cart.length;

spicesAPI.forEach(spice => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${spice.image}">
    <h3>${spice.name}</h3>
    <p>$${spice.price.toFixed(2)}</p>
    <button>Add to Cart</button>
  `;

  card.querySelector("button").addEventListener("click", () => {
    cart.push(spice);
    localStorage.setItem("cart", JSON.stringify(cart));
    cartCount.textContent = cart.length;
  });

  productsGrid.appendChild(card);
});
