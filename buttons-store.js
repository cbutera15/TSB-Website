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
  }

  addAnother(){
    this.amount += 1
  }

}

function addToCart(id){
  for (let i=0; i < cart.length; i++){
    if (cart[i].name == id){
      cart[i].add_another()
      return
    }
  }
  cart.push(new Item(id,1))
  console.log(cart)
  return
}