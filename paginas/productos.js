const cart = []

function addToCart(item) {
  cart.push(item)
}
function sumCart(items) {
    let total = 0
    for (let item of items) {
      let subtotal = item.price * item.quantity
      total += subtotal
    }
    return total
  }


let item1 = {
    name: "Macarons",
    price:2000,
    quantity:2
}

let item2 = {
    name: "Brownie con frutillas",
    price:3500,
    quantity:2
}
let item3 = {
    name: "Torta decorada con pasta de goma",
    price:3000,
    quantity:2
}
let item4 = {
    name: "Chessecake NY",
    price:2700,
    quantity:2
}
let item5 = {
    name: "Budin glaseado",
    price:2300,
    quantity:2
}
let item6 = {
    name: "Alfajores de maicena",
    price:1500,
    quantity:2
}

addToCart(item1)
addToCart(item2)

sumCart(cart)

console.log("El total del carrito es: ",sumCart(cart))

