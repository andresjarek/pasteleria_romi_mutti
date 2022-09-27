const cart = []

const products = [
{ id: 1, name: "Macarons x 6 u.", price:2000, img: 'https://drive.google.com/file/d/1Cp0sGUvEatFLF-DQLorOyWR6tVKLQzBu/view?usp=sharing'},
{ id: 2, name: "Brownie con frutillas", price:3500, img: 'https://drive.google.com/file/d/1-Q297un5J2Ee3EDj4eKchRho1owDC1Gs/view?usp=sharing'},
{ id: 3, name: "Torta en fondant personalizada", price:3000, img: 'https://drive.google.com/file/d/1QfEYzXac4XTU9hpcGN_cClBX3nJkYkch/view?usp=sharing'},
{ id: 4, name: "Chessecake NY", price:2700, img: 'https://drive.google.com/file/d/1tYIW4LzS76A-w3JkDsiuUtb3UWvxsm6G/view?usp=sharing'},
{ id: 5, name: "Budin glaseado", price:2300, img: 'https://drive.google.com/file/d/1DG0zjMTN1JHZE5Qmv28ZCtMlNbkEia4n/view?usp=sharing' },
{ id: 6, name: "Alfajores de maicena x 6 u.", price:1500, img: 'https://drive.google.com/file/d/1J6G_Xwek2jh8t8NUys_3wDS6i1m5NWao/view?usp=sharing' },
{ id: 7, name: "Letter/Number Cake", price:2500, img: 'https://drive.google.com/file/d/1oIF56VjWxI2oRhlIIxbyKmn8IsUBDIGI/view?usp=sharing' },
{ id: 8, name: "Shots Dulces x 12 u.", price:2500, img: 'https://drive.google.com/file/d/1rfJQEmiSgzvS3u0WcBuUFWGmBa_jmAdY/view?usp=sharing' },
{ id: 9, name: "Tarteletas x 3 u.", price:2200, img: 'https://drive.google.com/file/d/1eVvL_rDUre2pbJefoYoO_16y_E-raofu/view?usp=sharing' },
{ id: 10, name: "Tortas Clásicas", price:3000, img: 'https://drive.google.com/file/d/1nv6wtbqnEJJS8UHrXEWFBLbK2QSKL8Wj/view?usp=sharing' },
{ id: 11, name: "Torta Impresa personalizada", price:3300, img: 'https://drive.google.com/file/d/1PzOt_frGsjx0zYrRYwo8XrQIKFEWiAzu/view?usp=sharing' },
{ id: 12, name: "Torta de confirmacion", price:3000, img: 'https://drive.google.com/file/d/1d_0evfrw8EJGG7ZZu0Y9lhxenvOACDvr/view?usp=sharing' },
{ id: 13, name: "Torta Mousse de Frutilla", price:3500, img: 'https://drive.google.com/file/d/167sUhdkF4h0wGTlwRhP22j7FZe-ScEec/view?usp=sharing'},
{ id: 14, name: "Tiramisu", price:2500, img: 'https://drive.google.com/file/d/1ssV9dFXomfJacw3KqG76Pw9VrJRQkYJh/view?usp=sharing' },
{ id: 15, name: "Brucecake", price:3000, img: 'https://drive.google.com/file/d/1g6WAE_nIyriN1-33jd-ENNRgSx4kw3_J/view?usp=sharing' },
{ id: 16, name: "Cupcakes x 6 u.", price:2000, img: 'https://drive.google.com/file/d/1RxQygGTdo-vKcuKETLaI7zmky8P8EUfG/view?usp=sharing' },
{ id: 17, name: "Torta Oreo", price:3400, img: 'https://drive.google.com/file/d/1Bx4FsNs1p4xJuuavwWE9oT19rhMi1lYN/view?usp=sharing' },
]
products.forEach()
let saludo = document.getElementById("saludo");
let sesion = prompt("Ingrese la seccion a la que desea ingresar");
if(sesion === "carrito"){
  saludo.innerHTML = "<h1>Bienvenido al carrito</h1>";
  saludo.className = "verde";
}else if(sesion === "favoritos"){
  saludo.innerHTML = "<h1>Bienvenido a los favoritos</h1>";
  saludo.className = "amarillo";
}else{
  saludo.innerHTML = "<h1>Bienvenido a nuestra página</h1>";
  saludo.className = "azul";
}

// let maxPrice = parseInt(prompt("Ingrese su presupuesto"))

// let filtered = products.filter(product => product.price <= maxPrice);

// let message = "Estos son los productos disponibles"
// filtered.forEach((item) => {
//   message += `
//   name: ${item.name}
//   $${item.price}\n
// `});

// alert(message);

// function addToCart(item) {
//     //Si es Verdad que no Encontras un cartItem.ID igual en ese Array agregá una unidad y pusheala
//     if(!cart.find(cartItem => cartItem.id===item.id)){  
//         item.quantity=1
//         cart.push(item)
//     } else {  //en otro caso hace un cartmap(un array nuevo) y si habia un Item igual sumale otro
//          cart.map(cartItem => {
//             if(cartItem.id===item.id){
//                 cartItem.quantity++
//             }
//         })
//     }
//   return
// }
// function sumCart(items) {
//     let total = 0
//     for (let item of items) {
//       let subtotal = item.price * item.quantity
//       total += subtotal
//     }
//     return total
//   }




//   let name = prompt('Ingrese el nombre del producto');
//   let found = products.filter((product) => product.name.toLowerCase().search(name) !== -1 );
  
//   let show = ''
//   found.forEach((prod) => {show +=`
//        name: ${prod.name}
//        $${prod.price}
//      `})
//   alert(show);

