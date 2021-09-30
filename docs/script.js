let elemento = document.getElementById("elemento")
let cantidadY = 0
let cantidadX = 0
let imagen = document.getElementById("imagen_movimiento")
window.addEventListener("keydown", (e)=>{
    let movimiento = 50;
    switch (e.key) {
        case "ArrowUp":
            console.log("arriba")
            cantidadY-=movimiento
            elemento.style.transform=`translate(${cantidadX}px, ${cantidadY}px)`
            break;
        case "ArrowDown":
            console.log("abajo")
            cantidadY+=movimiento
            elemento.style.transform=`translate(${cantidadX}px, ${cantidadY}px)`
            break;
        case "ArrowLeft":
            console.log("izquierda")
            cantidadX-=movimiento
            imagen.src = "cerdo_LEFT.png"
            elemento.style.transform=`translate(${cantidadX}px, ${cantidadY}px)`
            break;
        case "ArrowRight":
            console.log("derecha")
            cantidadX+=movimiento
            imagen.src = "cerdo_RIGHT.png"
            elemento.style.transform=`translate(${cantidadX}px, ${cantidadY}px)`
            break;
        default:
            break;
    }console.log(cantidad);
})

