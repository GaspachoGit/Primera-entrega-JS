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

/* function Producto(nombre, precio, stock, color, dimenciones) {
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.color = color;
    this.dimenciones = dimenciones;
}
const cortina1 = new Producto("Cortina 1", 5500, 5, "roja", "2x4 metros");
const cortina2 = new Producto("Cortina 2", 2750, 0, "morada", "2x1.5 metros");
const cortina3 = new Producto("Cortina 3", 1850, 6, "celeste", "1.5x1.5 metros");
const mantel1 = new Producto("Mantel 1", 2350, 6, "blanco", "2.3x1.5 metros");
const mantel2 = new Producto("Mantel 2", 2850, 3, "rojo y blanco", "2.3x1.5 metros");
const mantel3 = new Producto("Mantel 3", 2350, 6, "amarillo", "2.3x1.5 metros");
 */

/* function añadirAlCarrito(cortinas) {
    let preguntaStock = Number(prompt("¿Qué cantidad de cortinas a comprar?"));
    let stock = cortinas.stock - preguntaStock;
    cortinas.stock = cortinas.stock - preguntaStock;
    if (cortinas.stock < 0) {
        alert("Stock insuficiente");
        cortina1.stock = 0
    } else {
        for (let index = 0; index < preguntaStock; index++) {
            carrito.push(new Carrito(cortinas.nombre, cortinas.precio, stock));
        }
        alert(`producto ${cortinas.nombre} añadido al carrito exitosamente`);
    }
} */

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
    let preguntaStock = Number(prompt("¿Qué cantidad de Productos a comprar?"));
    let stock = Producto.stock - preguntaStock;
    Producto.stock = Producto.stock - preguntaStock;
    if (Producto.stock < 0) {
        alert("Stock insuficiente");
        cortina.stock = 0
    } else {
        for (let index = 0; index < preguntaStock; index++) {
            carrito.push(new Carrito(Producto.nombre, Producto.precio, stock)); //pusheado al array carrito
        }
        alert(`producto ${Producto.nombre} añadido al carrito exitosamente`);
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
    {id:4 ,nombre: "Mantel 1", precio: 2350, stock: 6, color: "rojo", dimenciones :"2x4m", tipo: "mantel"},
    {id:5 ,nombre: "Mantel 2", precio: 2850, stock: 3, color: "rojo", dimenciones :"2x4m", tipo: "mantel"},
    {id:6 ,nombre: "Mantel 3", precio: 23500, stock: 6, color: "rojo", dimenciones :"2x4m", tipo: "mantel"},
]

let comprar = confirm("¿Desea comprar?");

while (comprar){
    var respuesta = prompt("Ingrese una opcion, (producto stock) para checkear el stock de un producto, (producto) para obtener la informacion del mismo, (producto add) para añadir al carrito (carrito) para ver la información del carrito, (filtro) para filtrar");
    switch (respuesta) {
//verificación de stock
                case "cortina1 stock":
                    alert(Productos[0].stock)
                    break;

                case "cortina2 stock":
                    alert(Productos[1].stock)
                    break;

                case ("cortina3 stock"):
                    alert(Productos[2].stock)
                    break;

                case ("mantel1 stock"):
                    alert(Productos[3].stock)
                    break;

                case ("mantel2 stock"):
                    alert(Productos[4].stock)
                    break;

                case ("mantel3 stock"):
                    alert(Productos[5].stock)
                    break;
//vista general del priducto
                case ("cortina1"):
                    console.log(Productos[0])
                    break;

                case ("cortina2"):
                    console.log(Productos[1])
                    break;

                case ("cortina3"):
                    console.log(Productos[2])
                    break;

                case ("mantel1"):
                    console.log(Productos[3])
                    break;

                case ("mantel2"):
                    console.log(Productos[4])
                    break;

                case ("mantel3"):
                    console.log(Productos[5])
                    break;
//añadir un rpoducto al carrito
                case ("cortina1 add"):
                    añadirAlCarrito(Productos[0])
                    break;

                case ("cortina2 add"):
                    añadirAlCarrito(Productos[1])
                    break;

                case ("cortina3 add"):
                    añadirAlCarrito(Productos[2])
                    break;

                case ("mantel1 add"):
                    añadirAlCarrito(Productos[3])
                    break;

                case ("mantel2 add"):
                    añadirAlCarrito(Productos[4])
                    break;

                case ("mantel3 add"):
                    añadirAlCarrito(Productos[5])
                    break;
// check del carrito
                case ("carrito"):
                    const precioTotal = carrito
                        .map((item) => item.precio)
                        .reduce((acc, el) => acc + el, 0);
                    const cantidad = carrito.length;
                    console.log("Precio Total de la compra: " + precioTotal);
                    console.log("Cantida de Productos seleccionados: " + cantidad);
                    console.log(carrito);
                    break;
// filtrado entre cortinas y manteles
                case ("filtro"):
                    flitrado(Productos)
                    break;

                default:
                    alert("ingrese una opción válida,(producto stock) para checkear el stock de un producto, (producto) para obtener la informacion del mismo, (producto add) para añadir al carrito (carrito) para ver la información del carrito");
                    break;
            }
    comprar = confirm("¿Desea realizar otra compra?")
} 








