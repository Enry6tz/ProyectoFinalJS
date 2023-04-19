class ProductoController{
    constructor() {

    }
    crear() {
        let obtenerListaJSON = localStorage.getItem("listaProductos");
    
        if (obtenerListaJSON) {
          this.listaProductos = JSON.parse(obtenerListaJSON);
         
        }
       
      }

}
class CarritoController{
    constructor (){

    }
}



//creando instancias de control de proctos

const productos = new ProductoController ();
const carrito = new CarritoController();

//le damos el array de objetos desde el json
productos.crear()
