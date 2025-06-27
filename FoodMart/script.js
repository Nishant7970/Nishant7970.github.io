const cart = [];

function setupCartButtons() {
  const buttons = document.querySelectorAll(".product button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const productElement = button.parentElement;
      const name = productElement.querySelector("h3").textContent;
      const priceText = productElement.querySelector("p").textContent;
      const price = parseFloat(priceText.replace("₹", "").replace("/kg", "").replace("/dozen", "").replace("/pack", "").replace("/litre", ""));

      const existing = cart.find(item => item.name === name);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ name, price, qty: 1 });
      }

      updateCart();
    });
  });
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = "<li>Your cart is empty.</li>";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - ₹${item.price} × ${item.qty} = ₹${item.price * item.qty}
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartList.appendChild(li);
    total += item.price * item.qty;
  });

  const totalLi = document.createElement("li");
  totalLi.innerHTML = `<strong>Total: ₹${total}</strong>`;
  cartList.appendChild(totalLi);
}

function removeItem(index) {
  cart.splice(index, 1);
  updateCart();
}

document.addEventListener("DOMContentLoaded", setupCartButtons);
