const cart = []
const insert = document.getElementById('insert');
const products = [
{ id: 1, name: "Macarons x 6 u.", price:2000, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399815/romiPasteleria/macarons_aubccv.jpg'},
{ id: 2, name: "Brownie con frutillas", price:3500, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399814/romiPasteleria/brownie-fresa_ajx0b3.jpg'},
{ id: 3, name: "Torta en fondant personalizada", price:3000, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399816/romiPasteleria/perro_u72hua.jpg'},
{ id: 4, name: "Chessecake NY", price:2700, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399815/romiPasteleria/chessecakeNY_xeuqco.jpg'},
{ id: 5, name: "Budin glaseado", price:2300, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399814/romiPasteleria/budin-clasico_dua2nl.jpg' },
{ id: 6, name: "Alfajores de maicena x 6 u.", price:1500, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399815/romiPasteleria/maizena_ocymnn.jpg' },
{ id: 7, name: "Letter/Number Cake", price:2500, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399815/romiPasteleria/N_yo6yzz.jpg' },
{ id: 8, name: "Shots Dulces x 12 u.", price:2500, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399814/romiPasteleria/copitas_dejltf.jpg' },
{ id: 9, name: "Tarteletas x 3 u.", price:2200, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399816/romiPasteleria/tarteletas_cl1p5e.jpg' },
{ id: 10, name: "Tortas Clásicas", price:3000, img: 'hhttps://res.cloudinary.com/dloxcckwo/image/upload/v1664399816/romiPasteleria/torta-blanca_qmlzct.jpg' },
{ id: 11, name: "Torta Impresa personalizada", price:3300, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399816/romiPasteleria/torta-wos_grcfus.jpg' },
{ id: 12, name: "Torta de confirmacion", price:3000, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399816/romiPasteleria/torta-confirmacion_iabxcg.jpg' },
{ id: 13, name: "Torta Mousse de Frutilla", price:3500, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399816/romiPasteleria/torta-mousse-fresa_xksa0i.jpg'},
{ id: 14, name: "Tiramisu", price:2500, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399816/romiPasteleria/tiramisu_mfjziw.jpg' },
{ id: 15, name: "Brucecake", price:3000, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399814/romiPasteleria/bruce-cake_xhuq46.jpg' },
{ id: 16, name: "Cupcakes x 6 u.", price:2000, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399814/romiPasteleria/cupcakes_u7b2u7.jpg' },
{ id: 17, name: "Torta Oreo", price:3400, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399816/romiPasteleria/torta-oreo_kfvzsk.jpg' },
]

products.forEach(product => {
    let refreshProduct = document.createElement('div');
    refreshProduct.innerHTML = `
    <h5>Nombre: ${product.name}</h5>
    <span>precio: ${product.price}</span>
    <img src='${product.img}'>
    `
    insert.append(refreshProduct)
})

/* let card = document.getElementById("insert");
let text = document.getElementById('title')
console.log(insert.innerHTML);
console.log(title.innerHTML); */

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

