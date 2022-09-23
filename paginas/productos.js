const cart = []

const products = [
{ id: 1, name: "Macarons x 6 u.", price:2000 },
{ id: 2, name: "Brownie con frutillas", price:3500 },
{ id: 3, name: "Torta decorada con pasta de goma", price:3000 },
{ id: 4, name: "Chessecake NY", price:2700 },
{ id: 5, name: "Budin glaseado", price:2300 },
{ id: 6, name: "Alfajores de maicena x 6 u.", price:1500 },
{ id: 7, name: "Letter/Number Cake", price:2500 },
{ id: 8, name: "Shots Dulces x 6 u.", price:2500 },
{ id: 9, name: "Tarteletas x 3 u.", price:2200 },
{ id: 10, name: "Tortas Clásicas", price:3000 },
{ id: 11, name: "Torta Impresa personalizada", price:3300 },
{ id: 12, name: "Torta de confirmacion", price:3000 },
{ id: 13, name: "Torta Mousse de Frutilla",rice:3500},
{ id: 14, name: "Tiramisu", price:2500 },
{ id: 15, name: "Brucecake", price:3000 },
{ id: 16, name: "Cupcakes x 6 u.", price:2000 },
{ id: 17, name: "Torta Oreo", price:3400 },
];


let maxPrice = parseInt(prompt("Ingrese su presupuesto"))


let filtered = products.filter(product => product.price <= maxPrice);

let message = "Estos son los productos disponibles"
filtered.forEach((item) => {
  message += `
  name: ${item.name}
  $${item.price}\n
`});

alert(message);

function addToCart(item) {
    
    if(!cart.find(cartItem => cartItem.id===item.id)){
        item.quantity=1
        cart.push(item)
    } else {
         cart.map(cartItem => {
            if(cartItem.id===item.id){
                cartItem.quantity++
            }
        })
    }
  return
}
function sumCart(items) {
    let total = 0
    for (let item of items) {
      let subtotal = item.price * item.quantity
      total += subtotal
    }
    return total
  }



products.forEach(item => {
  console.log(item.id, item.name, item.price);
}); 
products.forEach(item => {
  console.log(item.id, item.name, item.price);
}); 
let name = prompt("Ingrese el nombre del producto");
let finded = products.find((product) => product.name === name);
let show = `
     name: ${finded.name}
     $${finded.price}
   `;
alert(show);
