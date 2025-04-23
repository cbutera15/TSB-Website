const cartDisplay = document.getElementById("cart-display")
const priceDisplay = document.getElementById("total-price")
let cart = []


for (let i = 1; i <= 9; i++) {
    const button = document.getElementById(`b${i}`);
    if (button) {
      button.addEventListener("click", () => addToCart(`"b${i}"`));
      console.log(i)
    }
}

for (let i = 1; i <= 6; i++){
  const button = document.getElementById(`f${i}`)
  if (button){
    button.addEventListener('click', () => addToCart(`"f${i}"`));
    console.log(i)
  }
}

class Item {
  constructor(name, amount){
    this.name = name;
    this.amount = amount;
    this.price = 10;
  }

  addAnother(){
    this.amount += 1
  }

}

function addToCart(id){
  for (let i=0; i < cart.length; i++){
    if (cart[i].name == id){
      cart[i].addAnother()
      updateCart()
      return
    }
  }
  cart.push(new Item(id,1))
  console.log(cart)
  updateCart()
  return
}

function updateCart() {
  cartDisplay.textContent = "";
  priceDisplay.textContent = "TOTAL: "
  if (cart.length === 0) {
    cartDisplay.innerHTML = "No items in cart.";
    priceDisplay.textContent += "0"
    return;
  }
  let sum = 0
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    let li = document.createElement("li")
    li.textContent = `${item.name} x ${item.amount} - $${item.amount * item.price}`
    cartDisplay.appendChild(li);
    sum += item.amount * item.price
  }
  priceDisplay.textContent += `${sum}`
}