const productos = [
  {
    id: 1,
    nombre: "Varita Harry",
    precio: 7000,
    imagen: "../img/varitaharry.jpg",
    categoria: "varitas",
  },
  {
    id: 2,
    nombre: "Varita de Sauco",
    precio: 9000,
    imagen: "../img/varitasauco.jpg",
    categoria: "varitas",
  },
  {
    id: 3,
    nombre: "Varita Hermione Granger",
    precio: 8530,
    imagen: "../img/varitahermione.jpg",
    categoria: "varitas",
  },
  {
    id: 4,
    nombre: "Nimbus 2000",
    precio: 3500,
    imagen: "../img/nimbus200.jpg",
    categoria: "escobas",
  },
  {
    id: 5,
    nombre: "Nimbus 2001",
    precio: 4000,
    imagen: "../img/nimbus2001.jpg",
    categoria: "escobas",
  },

  {
    id: 6,
    nombre: "Nimbus Saeta de Fuego",
    precio: 5600,
    imagen: "../img/fuego.jpg",
    categoria: "escobas",
  },
  {
    id: 7,
    nombre: "Funko Hagrid Deluxe",
    precio: 17000,
    imagen: "../img/funkohagrid.jpg",
    categoria: "funkos",
  },
  {
    id: 8,
    nombre: "Funko Minerva Deluxe ",
    precio: 9000,
    imagen: "../img/funkominerva.jpg",
    categoria: "funkos",
  },
  {
    id: 9,
    nombre: "Funko Sybill Trelawney",
    precio: 8420,
    imagen: "../img/funkoTri.jpg",
    categoria: "funkos",
  },
  {
    id: 10,
    nombre: "Funko Dumbeldore Deluxe ",
    precio: 10000,
    imagen: "../img/funkoDumble.jpg",
    categoria: "funkos",
  },
  {
    id: 11,
    nombre: "Reliquias de la muerte ",
    precio: 2500,
    imagen: "../img/reliquias.jpg",
    categoria: "llaveros",
  },
  {
    id: 12,
    nombre: "Fenix ",
    precio: 3000,
    imagen: "../img/llaverofenix.jpg",
    categoria: "llaveros",
  },
  {
    id: 13,
    nombre: "Escudo de Hogwarts",
    precio: 5000,
    imagen: "../img/escudo.jpg",
    categoria: "llaveros",
  },
];

JSON.parse(localStorage.getItem("productos")) ||
  localStorage.setItem("productos", JSON.stringify(productos));
