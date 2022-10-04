const htmlResenas = document.getElementById("plantillaResenas");
const reviews = [
    { id: 1, face: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664482480/romiPasteleria/client1_f3zxue.jpg', resena:'Le pedí una torta de un cielo con estrellas y me lo dió, quedó como la quería y muy rica! Romi es super detallista, muy estética y se nota que ama lo que hace', img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664482480/romiPasteleria/5star_uqyzau.png', name: "Laura González"},
    { id: 2, face: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664482480/romiPasteleria/client2_nq6iuq.jpg', resena:'Gracias! Un éxito todo! Las nenas no dejaron ni un postrecito y la torta estaba hermosa. Cocinas muy rico y precioso. Me encantó!', img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664482480/romiPasteleria/5star_uqyzau.png', name: "Soledad Colombo"},
    { id: 3, face: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664482480/romiPasteleria/client3_r5r2xd.jpg', resena:'Excelente 10 felicitado! Mil gracias por la dedicación, todo riquisimo y mega prolijo. Sos una genia Romi!', img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664482480/romiPasteleria/5star_uqyzau.png', name: "Laura Perini"},
    { id: 4, face: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664482481/romiPasteleria/client4_zckaic.jpg', resena:'Fué un éxito la torta, les encantó a todos y era exactamente lo que yo quería! Gracias Romi por tanta dedicación', img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664482480/romiPasteleria/5star_uqyzau.png', name: "Evelin Rojas"},
    { id: 5, face: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664482481/romiPasteleria/client5_cwet08.jpg', resena:'Una genia Romi, la verdad es un antes y un después, la mejor! Las tortas mas ricas que probé', img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664482480/romiPasteleria/5star_uqyzau.png', name: "Alejandra Fernandez"},
    { id: 6, face: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664483066/romiPasteleria/client6_dnk8up.jpg', resena:'Un excelente trabajo, hermoso y todo de primera calidad como nos gusta, recomendadísima', img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664482480/romiPasteleria/5star_uqyzau.png', name: "Lorena Bordón"},
    { id: 7, face: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664483066/romiPasteleria/client7_quoqjj.jpg', resena:'Riquisimo todo Romi, me encantó! De las mejores tortas que comí, el relleno de los macarones era delicioso', img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664482480/romiPasteleria/5star_uqyzau.png', name: "Analia Perrone"},
    { id: 8, face: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664483065/romiPasteleria/client8_mdf1eh.jpg', resena:'¿Quieren una torta rica, linda, divertida y con toda la onda? Sos la mejor Romi, nos encantó!', img: 'https://res.cloudinary.com/dloxcckwo/image/upload/v1664482480/romiPasteleria/5star_uqyzau.png', name: "Gabriela Rouco"},
]


reviews.forEach(review => {
    let template2 = `<div id = ${review.id} class="resenas__card-interior">
    <img class="resenas__img-client" src= ${review.face} alt=${review.name}>
    <p class="resenas__texto"> ${review.resena}
        <img class="resenas__star" src= ${review.img} alt="imagen 5 estrellas">
    </p> <b class="resenas__firma">${review.name}</b>
</div>`
    htmlResenas.innerHTML += template2
  
})
