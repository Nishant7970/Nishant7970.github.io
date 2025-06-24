let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];

const showProducts = () => {
  let str = "<h2>Products</h2>";
  products.forEach((product) => {
    str += `
      <div class="product">
        ${product.name} - $${product.price}
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
  document.getElementById("root").innerHTML = str;
};

function addToCart(id) {
  if (cart[id]) {
    cart[id]++;
  } else {
    cart[id] = 1;
  }
  alert(`Added ${products.find(p => p.id === id).name} to cart`);
}

function increment(id) {
  if (cart[id]) {
    cart[id]++;
    showCart();
  }
}

function decrement(id) {
  if (cart[id]) {
    cart[id]--;
    if (cart[id] <= 0) {
      delete cart[id];
    }
    showCart();
  }
}

function showCart() {
  let root = document.getElementById("root");
  let str = "<h2>Your Cart</h2>";
  let total = 0;

  products.forEach((product) => {
    const qty = cart[product.id];
    if (qty) {
      const subtotal = qty * product.price;
      total += subtotal;
      str += `
        <div class="product">
          ${product.name} - $${product.price} x ${qty} = $${subtotal}
          <button onclick="increment(${product.id})">+</button>
          <button onclick="decrement(${product.id})">-</button>
        </div>
      `;
    }
  });

  if (total === 0) {
    str += "<p>Your cart is empty.</p>";
  } else {
    str += `<h3>Total: $${total}</h3>`;
  }

  root.innerHTML = str;
}
