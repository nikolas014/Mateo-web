let elemento = document.getElementById("elemento")
let cantidadY = 0
let cantidadX = 0
window.addEventListener("keydown", (e)=>{
    // console.log(e.key)
    // let teclas = e.key
    // console.log(teclas+" = "+teclas)
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
            elemento.style.transform=`translate(${cantidadX}px, ${cantidadY}px)`
            break;
        case "ArrowRight":
            cantidadX+=movimiento
            elemento.style.transform=`translate(${cantidadX}px, ${cantidadY}px)`
            console.log("derecha")
            break;
        default:
            break;
           
    }console.log(cantidad);
})