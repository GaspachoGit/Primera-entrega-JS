// producto >= 1 => hay stock, producto = 0 => no hay stock
/*Datos de entrada: un string con la accion a realizar, 
Datos de salida: dependiendo el caso, el stock de un producto, 



Posibilidades:
    a) en el caso de "producto sotck", mostrar el stock de ese producto.
    b) en el caso de "producto add" y si es que hay stock, añadir al carrito un producto (de valor desconocido).
        b1) en el caso de que no haya stock, mostrar un cartel que diga "Stock insuficiente".
    c) en el caso de "producto", mostrar toda la info del producto
    d) volver a pedir una entrada hasta que se escriba ESC o esc.

*/


const carrito = []

class Carrito{
    constructor(nombre, precio, stock){
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
    }
}

//Función para añadir al carrito actualizada al formato array
function añadirAlCarrito(Producto) {
    let preguntaStock = 1
    let stock = Producto.stock - preguntaStock;
    Producto.stock = Producto.stock - preguntaStock; //resta de stock
    if (Producto.stock < 0) {
        alert("Stock insuficiente");
        Producto.stock = 0
    } else {
        for (let index = 0; index < preguntaStock; index++) {
            carrito.push(new Carrito(Producto.nombre, Producto.precio, stock)); //pusheado al array carrito
        }
        // alert(`producto ${Producto.nombre} añadido al carrito exitosamente`);
    }
}

//función de filtrado
function flitrado(producto) {
    const manteles = producto.filter(x => x.tipo === "mantel")
    const cortinas = producto.filter(x => x.tipo === "cortina")

    let tipo = prompt("seleccione manteles o cortinas")
    if (tipo === "manteles") {
        console.log(manteles)
    } else if(tipo === "cortinas") {
        console.log(cortinas)
    } else{
        alert ("escoja una opción correcta: manteles / cortinas")
    }
}


//Declaración del array de productos
const Productos = [
    {id:1 ,nombre: "Cortina 1", precio: 5500, stock: 5, color: "rojo", dimenciones :"2x4m", tipo :"cortina"},
    {id:2 ,nombre: "Cortina 2", precio: 27500, stock: 0, color: "rojo", dimenciones :"2x4m", tipo :"cortina"},
    {id:3 ,nombre: "Cortina 3", precio: 1850, stock: 6, color: "rojo", dimenciones :"2x4m", tipo :"cortina"},
    {id:4 ,nombre: "Mantel 1", precio: 2350, stock: 8, color: "rojo", dimenciones :"2x4m", tipo: "mantel"},
    {id:5 ,nombre: "Mantel 2", precio: 2850, stock: 3, color: "rojo", dimenciones :"2x4m", tipo: "mantel"},
    {id:6 ,nombre: "Mantel 3", precio: 23500, stock: 2, color: "rojo", dimenciones :"2x4m", tipo: "mantel"},
]


//Enviar info al front del stock
const stkC1 = document.querySelector("#stockC1").textContent = `Stock: ${Productos[0].stock} `
const stkC2 = document.querySelector("#stockC2").textContent = `Stock: ${Productos[1].stock} `
const stkC3 = document.querySelector("#stockC3").textContent = `Stock: ${Productos[2].stock} `
const stkM1 = document.querySelector("#stockM1").textContent = `Stock: ${Productos[3].stock} `
const stkM2 = document.querySelector("#stockM2").textContent = `Stock: ${Productos[4].stock} `
const stkM3 = document.querySelector("#stockM3").textContent = `Stock: ${Productos[5].stock} `

//Click en añadir para empezar a comprar
const cortina1 = document.querySelector("#cortina1");
const cortina2 = document.querySelector("#cortina2");
const cortina3 = document.querySelector("#cortina3");
const mantel1 = document.querySelector("#mantel1");
const mantel2 = document.querySelector("#mantel2");
const mantel3 = document.querySelector("#mantel3");

cortina1.addEventListener("click", ()=>{
    añadirAlCarrito(Productos[0])
    if(Productos[0].stock>0){
        const cortina1A = document.querySelector("#cortina1").textContent = "Añadido :)"
    }
    const stkC1 = document.querySelector("#stockC1").textContent = `Stock: ${Productos[0].stock} `
})

cortina2.addEventListener("click", ()=>{
    añadirAlCarrito(Productos[1])
    if(Productos[1].stock>0){
        const cortina2A = document.querySelector("#cortina2").textContent = "Añadido :)"
    }
    const stkC2 = document.querySelector("#stockC2").textContent = `Stock: ${Productos[1].stock} `
})

cortina3.addEventListener("click", ()=>{
    añadirAlCarrito(Productos[2])
    if(Productos[2].stock>0){
        const cortina3A = document.querySelector("#cortina3").textContent = "Añadido :)"
    }
    const stkC3 = document.querySelector("#stockC3").textContent = `Stock: ${Productos[2].stock} `
})

mantel1.addEventListener("click", ()=>{
    añadirAlCarrito(Productos[3])
    if(Productos[3].stock>0){
        const mantel1A = document.querySelector("#mantel1").textContent = "Añadido :)"
    }
    const stkM1 = document.querySelector("#stockM1").textContent = `Stock: ${Productos[3].stock} `
})

mantel2.addEventListener("click", ()=>{
    añadirAlCarrito(Productos[4])
    if(Productos[4].stock>0){
        const mantel2A = document.querySelector("#mantel2").textContent = "Añadidos :)"
    }
    const stkM2 = document.querySelector("#stockM2").textContent = `Stock: ${Productos[4].stock} `
})

mantel3.addEventListener("click", ()=>{
    añadirAlCarrito(Productos[5])
    if(Productos[5].stock>0){
        const mantel3A = document.querySelector("#mantel3").textContent = "Añadido :)"
    }
    const stkM3 = document.querySelector("#stockM3").textContent = `Stock: ${Productos[5].stock} `
})


//Carrito check (consola)
const carCheck = document.querySelector('.carCheck')

carCheck.addEventListener("click", ()=>{
    const precioTotal = carrito
            .map((item) => item.precio)
            .reduce((acc, el) => acc + el, 0);
        const cantidad = carrito.length;
        console.log("Precio Total de la compra: " + precioTotal);
        console.log("Cantida de Productos seleccionados: " + cantidad);
        console.log(carrito);
})


//Mostrara info del producto
const cortina1Info = document.querySelector("#cortina1Info");
const cortina2Info = document.querySelector("#cortina2Info");
const cortina3Info = document.querySelector("#cortina3Info");
const mantel1Info = document.querySelector("#mantel1Info");
const mantel2Info = document.querySelector("#mantel2Info");
const mantel3Info = document.querySelector("#mantel3Info");

cortina1Info.addEventListener("click", ()=>{
    console.log(Productos[0])
})
cortina2Info.addEventListener("click", ()=>{
    console.log(Productos[1])
})
cortina3Info.addEventListener("click", ()=>{
    console.log(Productos[2])
})
mantel1Info.addEventListener("click", ()=>{
    console.log(Productos[3])
})
mantel2Info.addEventListener("click", ()=>{
    console.log(Productos[4])
})
mantel3Info.addEventListener("click", ()=>{
    console.log(Productos[5])
})

