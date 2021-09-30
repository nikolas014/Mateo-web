let elemento = document.getElementById("elemento")
let cantidadY = 0
let cantidadX = 0
let imagen = document.getElementById("imagen_movimiento")

// Funcion para mover el personaje
window.addEventListener("keydown", (e)=>{
    let movimiento = 3.125;
    switch (e.key) {
        case "ArrowUp":
            console.log("arriba")
            cantidadY-=movimiento
            elemento.style.transform=`translate(${cantidadX}em, ${cantidadY}em)`
            break;
        case "ArrowDown":
            console.log("abajo")
            cantidadY+=movimiento
            elemento.style.transform=`translate(${cantidadX}em, ${cantidadY}em)`
            break;
        case "ArrowLeft":
            console.log("izquierda")
            cantidadX-=movimiento
            imagen.src = "cerdo_LEFT.png"
            elemento.style.transform=`translate(${cantidadX}em, ${cantidadY}em)`
            break;
        case "ArrowRight":
            console.log("derecha")
            cantidadX+=movimiento
            imagen.src = "cerdo_RIGHT.png"
            elemento.style.transform=`translate(${cantidadX}em, ${cantidadY}em)`
            break;
        default:
            break;
    }console.log(cantidadY, cantidadX);
})

