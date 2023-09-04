const userlogin = document.getElementById("login");
const prod_div = document.getElementById("productos");

let productosDispoinbles = JSON.parse(localStorage.getItem("prodcutos"));

document.addEventListener("DOMContentLoaded", () => {
  generarCardsProductos(productosDisponibles);
});

export const generarCardsProductos = (productos) => {
  productos.innerHTML = "";

  productos.forEach((producto) => {
    const { imagen, nombre, categoria, precio, id } = producto;

    let card = document.createElement("div");
    card.className = "producto";
    card.innerHTML = `
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${imagen}" alt="Card image cap">
      <div class="card-body">
      <p class="card-title">${nombre}</p>
      <p class="card-text">Categoria: ${categoria}</p>
  
      <p class="card-text">Precio: <b>$${precio}</b></p>
      <button id="btn${id}" class="btn btn-primary">Comprar</button>
  
      </div>
      </div>`;

    producto.appendChild(card);

    const btnComprar = document.getElementById(`btn${id}`);
    btnComprar.addEventListener("click", () => comprarProducto(id));
  });
};
