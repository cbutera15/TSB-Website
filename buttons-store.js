const cartDisplay = document.getElementById("cart-display")
const priceDisplay = document.getElementById("total-price")
let cart = []

//get name from id
let idNameDict = {
  "b1":"Classic Chicken Quart",
  "b2":"Classic Chicken Pint",
  "b3":"Apple Pork",
  "b4":"Chicken and Lemongrass",
  "b5":"Tomato and Beef",
  "b6":"Spiced Lamb",
  "b7":"Digestion",
  "b8":"Adaptpgen",
  "b9":"Immune Boost"
}

//get price from id
let idPriceDict = {
  "b1":17.0,
  "b2":10.0,
  "b3":19.0,
  "b4":21.0,
  "b5":21.0,
  "b6":19.0,
  "b7":21.0,
  "b8":20.0,
  "b9":19.0
}

//creates event listeners for the broth section buttons
for (let i = 1; i <= 9; i++) {
    const button = document.getElementById(`b${i}`);
    if (button) {
      button.addEventListener("click", () => addToCart(`b${i}`));
      console.log(i)
    }
}

//creates event listeners for the broth section buttons when
// the media query is active
for (let i = 1; i <= 9; i++){
  const button = document.getElementById(`p${i}`)
  if (button){
    button.addEventListener('click', () => addToCart(`b${i}`));
    console.log("b",i)
  }
}

//creates event listeners for the frozen(name might change) section
for (let i = 1; i <= 4; i++){
  const button = document.getElementById(`f${i}`)
  if (button){
    button.addEventListener('click', () => addToCart(`f${i}`));
  }
}

//creates event listeners for the best sellers section
for (let i = 1; i <= 4; i++){
  const button = document.getElementById(`fav${i}`)
  if (button){
    button.addEventListener('click', () => addToCart(button.className));
  }
}

//does the above but with the media query
for (let i = 1; i <= 4; i++){
  const button = document.getElementById(`pf${i}`)
  if (button){
    button.addEventListener('click', () => addToCart(button.className))
    console.log("phone",i)
  }
}

class Item {
  constructor(id, amount){
    this.id = id
    this.name = idNameDict[id];
    this.price = idPriceDict[id];
    this.amount = amount;
    
  }

  addAnother(){
    this.amount += 1
    updateCart()
  }

  subtract(){
    this.amount -= 1
    updateCart()
  }

}

function addToCart(id){
  for (let i=0; i < cart.length; i++){
    if (cart[i].id == id){
      cart[i].addAnother()
      updateCart()
      return
    }
  }
  cart.push(new Item(id,1))
  updateCart()
  return
}

function updateTotal(){
  let sum = 0
  for (let i = 0;i < cart.length; i++){
    sum += cart[i].amount * cart[i].price
  }
  priceDisplay.textContent = "TOTAL: $"
  priceDisplay.textContent += sum
  return
}

function updateCart() {
  cartDisplay.textContent = "";
  priceDisplay.textContent = "TOTAL: $"
  if (cart.length === 0) {
    cartDisplay.innerHTML = "No items in cart.";
    priceDisplay.textContent += "0"
    return;
  }
  let sum = 0.0
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i];
    if (item.amount > 0){
      let li = document.createElement("li")
      li.appendChild(makeDivString(cart[i]));
      cartDisplay.appendChild(li);
      sum += item.amount * item.price
    }else{
      //removes item from cart if amount <= 0
      cart.splice(i,1)
      updateCart()
    }
  }
  priceDisplay.textContent += `${sum}`
}

function makeDivString(item) {
  let newDiv = document.createElement("div")
  let text = document.createElement("p")

  let amountDiv = document.createElement("div")
  let plus = document.createElement("button")
  let minus = document.createElement("button")
  let count = document.createElement("p")

  count.textContent = item.amount

  newDiv.classList.add("cart-item")
  minus.classList.add("minus")
  plus.classList.add("plus")
  amountDiv.classList.add("amount-container")
  newDiv.classList.add("cart-item")

  minus.addEventListener("click", () => item.subtract())
  plus.addEventListener('click', () => item.addAnother())
  amountDiv.appendChild(minus)
  amountDiv.appendChild(count)
  amountDiv.appendChild(plus)

  text.textContent = item.name + " - $" + (item.price * item.amount) + ".00" 

  newDiv.appendChild(text)
  newDiv.appendChild(amountDiv)
  
  return newDiv
}
