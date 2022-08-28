
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



const carrito = {
    precio : 0,
    cantidad : 0,
}

function añadirAlCarrito(stock, precio, carritoCant, carritoPrecio) {
    if (stock >= 1) {
        carritoCant++;
        stock--
        carritoPrecio = carritoPrecio + precio;
        alert("producto añadido al carrito exitosamente");
    } else {
        alert("este producto no posee stock");
    }
}






function Producto(nombre, precio, stock, color, dimenciones) {
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.color = color
    this.dimenciones = dimenciones
}

const cortina1 = new Producto("Cortina 1", 5500, 5, "roja", "2x4 metros");

const cortina2 = new Producto("Cortina 2", 2750, 2, "morada", "2x1.5 metros");

const cortina3 = new Producto("Cortina 3", 1850, 6, "roja", "1x1 metro");



let respuesta = prompt("Ingrese una opcion, (producto stock) para checkear el stock de un producto, (producto) para obtener la informacion del mismo, (producto add) para añadir al carrito (carrito) para ver la información del carrito");

while (respuesta != esc || ESC){
    switch (respuesta) {
        //verificación de stock
                case ("cortina1 stock"):
                    alert(cortina1.stock)
                    breack;
            
                case ("cortina2 stock"):
                    alert(cortina2.stock)
                    breack;
        
                case ("cortina3 stock"):
                    alert(cortina3.stock)
                    breack;
        //vista general del priducto
                case ("cortina1"):
                    console.log(cortina1)
                    breack;
        
                case ("cortina2"):
                    console.log(cortina2)
                    breack;
        
                case ("cortina3"):
                    console.log(cortina3)
                    breack;
        //añadir un rpoducto al carrito
                case ("cortina1 add"):
                    añadirAlCarrito(cortina1.stock, cortina1.precio, carrito.cantidad, carrito.precio)
                    breack;
        
                case ("cortina2 add"):
                    añadirAlCarrito(cortina2.stock, cortina2.precio, carrito.cantidad, carrito.precio)
                    breack;
        
                case ("cortina3 add"):
                    añadirAlCarrito(cortina3.stock, cortina3.precio, carrito.cantidad, carrito.precio)
                    breack;
        //
                case ("carrito"):
                    alert(carrito);
                    breack;
        
                default:
                    alert("ingrese una opción válida,(producto stock) para checkear el stock de un producto, (producto) para obtener la informacion del mismo, (producto add) para añadir al carrito (carrito) para ver la información del carrito");
                    breack;
            }
}











/* if (cortina3.stock >= 1) {
    carrito.cantidad++;
    cortina3.stock--;
    carrito.precio = carrito.precio + cortina3.precio
    console.log("producto añadido al carrito exitosamente")
} else {
    alert("este producto no posee stock");
} */




