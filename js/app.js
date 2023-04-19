class ProductoController {
    constructor() {
      this.listaProductos = [];
    }
  
    levantar() {
      let obtenerListaJSON = localStorage.getItem("listaProductos");
  
      if (obtenerListaJSON) {
        this.listaProductos = JSON.parse(obtenerListaJSON);
       
      }
     
    }
    mostrarEnDOM(productos) {
      productos.innerHTML = "";
      //muestra  la lista completa
      this.listaProductos.forEach((producto) => {
        productos.innerHTML += `
        <div class="card card-custom" style="width: 18rem;">
          <img src="${producto.img}" class="card-img-top card-img" alt="${producto.alt}">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <div class="card-info">
              <p class= "card-text">$${producto.precio}</p>
              <p class= "card-text">stock: ${producto.stock}</p>
            </div>
            <a href="#" class="btn btn-primary" id="${producto.id}">Añadir al carrito</a>
          </div>
        </div>
              `;
      });
    }
    mostrarSamsung(productos) {
      productos.innerHTML = "";
      this.listaProductos.forEach((producto) => {
        productos.innerHTML += `
        <div class="card card-custom" style="width: 18rem;">
          <img src="${producto.img}" class="card-img-top card-img" alt="${producto.alt}">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <div class="card-info">
              <p class= "card-text">$${producto.precio}</p>
              <p class= "card-text">stock: ${producto.stock}</p>
            </div>
            <a href="#" class="btn btn-primary" id="${producto.id}">Añadir al carrito</a>
          </div>
        </div>
              `;
      });
    }
    mostrarIphone(productos) {
      productos.innerHTML = "";
      //muestra  la lista completa

      this.listaProductos.forEach((producto) => {
        productos.innerHTML += `
        <div class="card card-custom" style="width: 18rem;">
          <img src="${producto.img}" class="card-img-top card-img" alt="${producto.alt}">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <div class="card-info">
              <p class= "card-text">$${producto.precio}</p>
              <p class= "card-text">stock: ${producto.stock}</p>
            </div>
            <a href="#" class="btn btn-primary" id="${producto.id}">Añadir al carrito</a>
          </div>
        </div>
              `;
      });
    }
    mostrarAccesorios(productos) {
      productos.innerHTML = "";
      //muestra  la lista completa
      
      this.listaProductos.forEach((producto) => {
        productos.innerHTML += `
        <div class="card card-custom" style="width: 18rem;">
          <img src="${producto.img}" class="card-img-top card-img" alt="${producto.alt}">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <div class="card-info">
              <p class= "card-text">$${producto.precio}</p>
              <p class= "card-text">stock: ${producto.stock}</p>
            </div>
            <a href="#" class="btn btn-primary" id="${producto.id}">Añadir al carrito</a>
          </div>
        </div>
              `;
      });
    }
    mostrarCelulares(productos) {
      productos.innerHTML = "";
      //muestra  la lista completa
      this.listaProductos.forEach((producto) => {
        productos.innerHTML += `
        <div class="card card-custom" style="width: 18rem;">
          <img src="${producto.img}" class="card-img-top card-img" alt="${producto.alt}">
          <div class="card-body">
            <h5 class="card-title">${producto.nombre}</h5>
            <p class="card-text">${producto.descripcion}</p>
            <div class="card-info">
              <p class= "card-text">$${producto.precio}</p>
              <p class= "card-text">stock: ${producto.stock}</p>
            </div>
            <a href="#" class="btn btn-primary" id="${producto.id}">Añadir al carrito</a>
          </div>
        </div>
              `;
      });
    }
    

  }
  
  class CarritoController {
    constructor() {
      this.listaCarrito = [];
      (this.precio = document.getElementById("precio")),
        (this.precio_con_iva = document.getElementById("precio_con_iva"));
    }
  
    borrar(producto) {
      let indice = this.listaCarrito.indexOf(producto);
      this.listaCarrito.splice(indice, 1);
    }
  
    levantar() {
      let obtenerListaJSON = localStorage.getItem("listaCarrito");
  
      if (obtenerListaJSON) {
        this.listaCarrito = JSON.parse(obtenerListaJSON);
        return true
      }
      return false
    }
  
    anadir(producto) {
      let existeProducto = this.listaCarrito.some(
        (elemento) => elemento.id == producto.id
      );
  
      if (existeProducto) {
        const productoEncontrado = this.buscar(producto.id);
        productoEncontrado.cantidad += 1;
      } else {
        this.listaCarrito.push(producto);
      }
  
      let arrFormatoJSON = JSON.stringify(this.listaCarrito);
      localStorage.setItem("listaCarrito", arrFormatoJSON);
    }
  
    mostrarEnDOM(contenedor_carrito ) {
      //limpio el container
      contenedor_carrito.innerHTML = "";
      //muestro todo
      this.listaCarrito.forEach((producto ) => {
        if (producto.marca == marca)
        contenedor_carrito.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${producto.img}" class="img-fluid rounded-start" alt="${producto.alt}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title font-weight-bolder border-bottom-0">${producto.nombre}</h5>
                            <p class="card-text">${producto.descripcion}</p>
                            <p class="card-text">cantidad: x ${producto.cantidad} unidades</p>
                            <p class="card-text">$${producto.precio}</p>
                            <button id="borrar${producto.id}" class="buttonTrash"><i class="fas fa-trash-alt"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            `;
        document
          .getElementById(`borrar${producto.id}`)
          .addEventListener("click", () => {
            // borramos el producto de this.listaProductos
            this.borrar(producto);
            //  actualizamos el storage
            localStorage.setItem(
              "listaCarrito",
              JSON.stringify(this.listaCarrito)
            );
            // actualizamos el dom
            this.mostrarEnDOM(contenedor_carrito);
            this.mostrarPreciosEnDOM();
          });
        document
          .getElementById(`borrar${producto.id}`)
          .addEventListener("click", () => {
            this.borrar(producto);
          });
      });
    }
  
    mostrarPreciosEnDOM() {
      this.precio.innerHTML = "$"+this.calcularTotal();
      this.precio_con_iva.innerHTML = "$"+this.calcularPrecioConIva();
    }
  
    calcularTotal() {
      return this.listaCarrito.reduce(
        (acumulador, producto) =>
          acumulador + producto.precio * producto.cantidad,
        0
      );
    }
    
    calcularPrecioConIva() {
      const total = this.calcularTotal() * 1.21;
      return Number(total.toFixed());
    }
  
    buscar(id) {
      return this.listaCarrito.find((producto) => producto.id == id);
    }
  
    limpiar() {
      localStorage.removeItem("listaCarrito");
      this.listaCarrito = [];
  
      this.listaCarrito.forEach((producto) => {
        document
          .getElementById(`borrar${producto.id}`)
          .addEventListener("click", () => {
            // borramos el producto de this.listaProductos
            this.borrar(producto);
            //  actualizamos el storage
            localStorage.setItem(
              "listaCarrito",
              JSON.stringify(this.listaCarrito)
            );
            // actualizamos el dom
            this.mostrarEnDOM(contenedor_carrito);
          });
      });
    }
  }
  
  //creando instancias
  const controladorProductos = new ProductoController();
  const controladorCarrito = new CarritoController();
  
  //Verificar STORAGE
  controladorProductos.levantar();
  const levantoAlgo = controladorCarrito.levantar();

  //DOM
  
  const finalizar_compra = document.getElementById("finalizar_compra");
  const vaciar_carrito = document.getElementById("vaciar_carrito");
  
  if (levantoAlgo) {
    controladorCarrito.mostrarPreciosEnDOM(precio, precio_con_iva);
  }
  
  //APP JS
  controladorProductos.mostrarSamsung(contenedor_productos);
  controladorCarrito.mostrarEnDOM(contenedor_carrito);
  
  //Añadimos Eventos a los botones de cada CARD cacacacacaacacca
  
  controladorProductos.listaProductos.forEach((producto) => {
    const productoEnDOM = document.getElementById(`vaper${producto.id}`);
  
    productoEnDOM.addEventListener("click", () => {
      controladorCarrito.anadir(producto);
  
      controladorCarrito.levantar();
  
      controladorCarrito.mostrarEnDOM(contenedor_carrito);
      controladorCarrito.mostrarPreciosEnDOM(precio, precio_con_iva);
  
      Toastify({
        text: "Producto añadido con éxito",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
      }).showToast();
    });
  });
  
  finalizar_compra.addEventListener("click", () => {
    if (controladorCarrito.listaCarrito.length > 0) {
      controladorCarrito.limpiar();
      controladorCarrito.mostrarEnDOM(contenedor_carrito);
      controladorCarrito.mostrarPreciosEnDOM(precio, precio_con_iva);
  
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Compra realizada con éxito!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Debe agregar al menos un producto al carrito.",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  });
  
  vaciar_carrito.addEventListener("click", () => {
    controladorCarrito.limpiar();
    controladorCarrito.mostrarEnDOM(contenedor_carrito);
    controladorCarrito.mostrarPreciosEnDOM(precio, precio_con_iva);
  });
  
  