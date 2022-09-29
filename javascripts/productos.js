const cart = []
const htmlProducts = document.getElementById('listaDeProductos');
const products = [
{ id: 1, name: "Macarons x 6 u.", price:2000, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399815/romiPasteleria/macarons_aubccv.jpg', description:'Caja de 6 unidades. Sabor a elección - Lemoncream - Ganache de chocolate - Chocolate Blanco y Frutilla - Dulce de Leche'},
{ id: 2, name: "Brownie con frutillas", price:3500, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399814/romiPasteleria/brownie-fresa_ajx0b3.jpg', description:'Brownie con nueces con cobertura de dulce de leche y crema (opciónal merengue italiano) y frutas de estación o frutos rojos'},
{ id: 3, name: "Torta en fondant personalizada", price:3000, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399816/romiPasteleria/perro_u72hua.jpg', description:'Torta 30 porciones con muñeco en porcelana y decoración'},
{ id: 4, name: "Chessecake NY", price:2700, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399815/romiPasteleria/chessecakeNY_xeuqco.jpg', description:'Tarta de queso Finlandia. Súper cremosa y riquísima! Cubierta en frutos rojos o Frutillas según disponibilidad'},
{ id: 5, name: "Budin glaseado", price:2300, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399814/romiPasteleria/budin-clasico_dua2nl.jpg' , description:'Budín de vainilla, almendras, nueces, castañas de cajú y glaseado de limón'},
{ id: 6, name: "Alfajores de maicena x 6 u.", price:1500, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399815/romiPasteleria/maizena_ocymnn.jpg' , description:'Alfajores de maicena con mucho dulce de leche y coco'},
{ id: 7, name: "Letter/Number Cake", price:2500, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399815/romiPasteleria/N_yo6yzz.jpg' , description:'Torta letra en masa sable rellena de dulce de leche y cubierta en crema chantilly. Decoración en chocolatines y macarons'},
{ id: 8, name: "Shots Dulces x 12 u.", price:2500, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399814/romiPasteleria/copitas_dejltf.jpg' , description:'Shots Dulces en vasitos plásticos de 100ml. Dos sabores por docena. Sabores: Mousse de frutillas - Chocotorta - Tiramisú - Choco oreo - Lemon pie'},
{ id: 9, name: "Tarteletas x 3 u.", price:2200, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399816/romiPasteleria/tarteletas_cl1p5e.jpg' , description:'Caja de 4 unidades. Sabor a elección. Maracuyá Pie - Lemon Pie - Chantilly y Frutillas - Crema Toffe y almendras'},
{ id: 10, name: "Tortas Clásicas", price:3000, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399816/romiPasteleria/torta-blanca_qmlzct.jpg' , description:'Tortas clásicas de Bizcochuelo liviano húmedo sabor vainilla o chocolate relleno simple de dulce de leche y crema con frutas de estación. Cubiertas en merengue italiano o crema. Opciones: Balcarce - Selva Negra - Chajá - Chocolate y Nutella'},
{ id: 11, name: "Torta Impresa personalizada", price:3300, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399816/romiPasteleria/torta-wos_grcfus.jpg' , description:'Sabores de Bizcochuelo : chocolate, vainilla, naranja, limón. Rellenos ( 2 a elección) Crema bariloche - Choco semiamargo - Choco blanco - Dulce de leche'},
{ id: 12, name: "Torta de confirmacion", price:3000, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399816/romiPasteleria/torta-confirmacion_iabxcg.jpg' , description:'Bizcochuelo de vainilla relleno de dulce de leche y chocolate semi amargo. Decoración de paloma y flores en pasta de goma y detalles en plateado'},
{ id: 13, name: "Torta Mousse de Frutilla", price:3500, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399816/romiPasteleria/torta-mousse-fresa_xksa0i.jpg', description:'Torta de mousse casera de Frutillas, con base humeda de Bizcocho de chocolate, decorada con crema o chocolate y Frutillas o frutos rojos según disponibilidad'},
{ id: 14, name: "Tiramisu", price:2500, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399816/romiPasteleria/tiramisu_mfjziw.jpg' , description:'Base de Vainillas con café, crema de café , crema chantilly y cubierta de cacao'},
{ id: 15, name: "Brucecake", price:3000, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399814/romiPasteleria/bruce-cake_xhuq46.jpg' , description:'Torta FULL chocolate ( Genuino, choco posta )'},
{ id: 16, name: "Cupcakes x 6 u.", price:2000, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399814/romiPasteleria/cupcakes_u7b2u7.jpg' , description:'Sabores de Bizcochuelo : chocolate, vainilla, naranja, limón. Cobertura de Chocolate, Dulce de leche, Buttercream con opción de Deco en pasta de azúcar o topper (papel laminado)'},
{ id: 17, name: "Torta Oreo", price:3400, img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664399816/romiPasteleria/torta-oreo_kfvzsk.jpg' , description:'Galletas oreo, crema oreo y Dulce de leche'},
]


function addToCart(item) {
    //Si es Verdad que no Encontras un cartItem.ID igual en ese Array agregá una unidad y pusheala
    if(!cart.find(cartItem => cartItem.id===item.id)){  
        item.quantity=1
        cart.push(item)
    } else {  //en otro caso hace un cartmap(un array nuevo) y si habia un Item igual sumale otro
         cart.map(cartItem => {
            if(cartItem.id===item.id){
                cartItem.quantity++
            }
        })
    }
  return
}

products.forEach(product => {
    let template = `<div id=${product.id} class="card col-xs-12 col-sm-9 col-md-3 mt-2" style="width: 21rem;">
        <img src=${product.img} class="card-img-top pt-2" alt=${product.name}>
        <div class="card-body" >
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">${product.description}</p>
            <button class="botones bot_productos"  title="Enviar">Pedilo ahora</button>
        </div>
    </div>`
    htmlProducts.innerHTML += template
})


const botonesDePedido = document.querySelectorAll(".bot_productos");

botonesDePedido.forEach(btn => {
    btn.addEventListener("click", function () {
        let idCard = parseInt(this.parentNode.parentNode.id)
        let productToAdd = products.find(product => product.id === idCard)
        addToCart(productToAdd)
        console.log(cart)
    })
})      
// function sumCart(items) {
//     let total = 0
//     for (let item of items) {
//       let subtotal = item.price * item.quantity
//       total += subtotal
//     }
//     return total
//   }

//-----------------------------------------

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





//   let name = prompt('Ingrese el nombre del producto');
//   let found = products.filter((product) => product.name.toLowerCase().search(name) !== -1 );
  
//   let show = ''
//   found.forEach((prod) => {show +=`
//        name: ${prod.name}
//        $${prod.price}
//      `})
//   alert(show);

