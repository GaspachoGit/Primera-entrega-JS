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

function añadirAlCarrito(cortinas) {
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
}


function Producto(nombre, precio, stock, color, dimenciones) {
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

let comprar = confirm("¿Desea comprar?");

while (comprar){
    var respuesta = prompt("Ingrese una opcion, (producto stock) para checkear el stock de un producto, (producto) para obtener la informacion del mismo, (producto add) para añadir al carrito (carrito) para ver la información del carrito");
    switch (respuesta) {
//verificación de stock
                case "cortina1 stock":
                    alert(cortina1.stock)
                    break;

                case "cortina2 stock":
                    alert(cortina2.stock)
                    break;

                case ("cortina3 stock"):
                    alert(cortina3.stock)
                    break;

                case ("mantel1 stock"):
                    alert(mantel1.stock)
                    break;

                case ("mantel2 stock"):
                    alert(mantel2.stock)
                    break;

                case ("mantel3 stock"):
                    alert(mantel3.stock)
                    break;
//vista general del priducto
                case ("cortina1"):
                    console.log(cortina1)
                    break;

                case ("cortina2"):
                    console.log(cortina2)
                    break;

                case ("cortina3"):
                    console.log(cortina3)
                    break;

                case ("mantel1"):
                    console.log(mantel1)
                    break;

                case ("mantel2"):
                    console.log(mantel2)
                    break;

                case ("mantel3"):
                    console.log(mantel3)
                    break;
//añadir un rpoducto al carrito
                case ("cortina1 add"):
                    añadirAlCarrito(cortina1)
                    break;

                case ("cortina2 add"):
                    añadirAlCarrito(cortina2)
                    break;

                case ("cortina3 add"):
                    añadirAlCarrito(cortina3)
                    break;

                case ("mantel1 add"):
                    añadirAlCarrito(mantel1)
                    break;

                case ("mantel2 add"):
                    añadirAlCarrito(mantel2)
                    break;

                case ("mantel3 add"):
                    añadirAlCarrito(mantel3)
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

                default:
                    alert("ingrese una opción válida,(producto stock) para checkear el stock de un producto, (producto) para obtener la informacion del mismo, (producto add) para añadir al carrito (carrito) para ver la información del carrito");
                    break;
            }
    comprar = confirm("¿Desea realizar otra compra?")
} 








