console.log(productos);

const userlogin = document.getElementById("login");
const prod_div = document.getElementById("productos");

let productosDispoinbles = JSON.parse(localStorage.getItem("prodcutos"));

document.addEventListener("DOMContentLoaded", () => {
  generarCardsProductos(productosDispoinbles);
});

const generarCardsProductos = (productos) => {
  prod_div.innerHTML = "";

  productos.forEach((producto) => {
    const { imagen, nombre, categoria, precio, id } = producto;

    let card = document.createElement("div");
    card.className = "producto";
    card.innerHTML = `
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${producto.imagen}" alt="Card image cap">
      <div class="card-body">
      <p class="card-title">${producto.nombre}</p>
      <p class="card-text">Categoria: ${producto.categoria}</p>
  
      <p class="card-text">Precio: <b>$${producto.precio}</b></p>
      <button id="btn${id}" class="btn btn-primary">Comprar</button>
  
      </div>
      </div>`;

    divProductos.appendChild(card);

    const btnComprar = document.getElementById(`btn${id}`);
    btnComprar.addEventListener("click", () => comprarProducto(id));
  });
};
