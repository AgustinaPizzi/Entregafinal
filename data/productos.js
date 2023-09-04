export const productos = [
  {
    id: 1,
    nombre: "Varita Harry",
    precio: 7000,
    ifmagen: "../img/varitaharry.jpg",
    categoria: "varitas",
  },
  {
    Id: 2,
    Nombre: "Varita de Sauco",
    Precio: 9000,
    Imagen: "../img/varitasauco.jpg",
    Categoria: "varitas",
  },
  {
    Id: 3,
    Nombre: "Varita Hermione Granger",
    Precio: 8530,
    Imagen: "../img/varitahermione.jpg",
    Categoria: "varitas",
  },
  {
    Id: 4,
    Nombre: "Nimbus 2000",
    Precio: 3500,
    Imagen: "../img/nimbus200.jpg",
    Categoria: "escobas",
  },
  {
    Id: 5,
    Nombre: "Nimbus 2001",
    Precio: 4000,
    Imagen: "../img/nimbus2001.jpg",
    Categoria: "escobas",
  },

  {
    Id: 6,
    Nombre: "Nimbus Saeta de Fuego",
    Precio: 5600,
    Imagen: "../img/fuego.jpg",
    Categoria: "escobas",
  },
  {
    Id: 7,
    Nombre: "Funko Hagrid Deluxe",
    Precio: 17000,
    Imagen: "../img/funkohagrid.jpg",
    Categoria: "funkos",
  },
  {
    Id: 8,
    Nombre: "Funko Minerva Deluxe ",
    Precio: 9000,
    Imagen: "../img/funkominerva.jpg",
    Categoria: "funkos",
  },
  {
    Id: 9,
    Nombre: "Funko Sybill Trelawney",
    Precio: 8420,
    Imagen: "../img/funkoTri.jpg",
    Categoria: "funkos",
  },
  {
    Id: 10,
    Nombre: "Funko Dumbeldore Deluxe ",
    Precio: 10000,
    Imagen: "../img/funkoDumble.jpg",
    Categoria: "funkos",
  },
  {
    Id: 11,
    Nombre: "Reliquias de la muerte ",
    Precio: 2500,
    Imagen: "../img/reliquias.jpg",
    Categoria: "llaveros",
  },
  {
    Id: 12,
    Nombre: "Fenix ",
    Precio: 3000,
    Imagen: "../img/llaverofenix.jpg",
    Categoria: "llaveros",
  },
  {
    Id: 13,
    Nombre: "Escudo de Hogwarts",
    Precio: 5000,
    Imagen: "../img/escudo.jpg",
    Categoria: "llaveros",
  },
];

JSON.parse(localStorage.getItem("productos")) ||
  localStorage.setItem("productos", JSON.stringify(productos));
