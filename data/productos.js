export const productos = [
  {
    Id: 1,
    Nombre: "Varita Harry",
    Precio: 7000,
    Imagen:""
    Categoria: "varitas",
  },
  {
    Id: 2,
    Nombre: "Varita de Sauco",
    Precio: 9000,
    Imagen:
    Categoria: "varitas",
  },
  {
    Id: 3,
    Nombre: "Varita Hermione Granger",
    Precio: 8530,
    Imagen:
    
    Categoria: "varitas",
  },
  {
    Id: 4,
    Nombre: "Nimbus 2000",
    Precio: 3500,
    Imagen:
    
    Categoria: "escobas",
  },
  {
    Id: 5,
    Nombre: "Nimbus 2001",
    Precio: 4000,
    Imagen:
      
    Categoria: "escobas",
  },

  {
    Id: 6,
    Nombre: "Nimbus Saeta de Fuego",
    Precio: 5600,
    Imagen:
      
    Categoria: "escobas",
  },
  {
    Id: 7,
    Nombre: "Funko Hagrid Deluxe",
    Precio: 17000,
    Imagen:
      
    Categoria: "funkos",
  },
  {
    Id: 8,
    Nombre: "Funko Minerva Deluxe ",
    Precio: 9000,
    Imagen:

    Categoria: "funkos",
  },
  {
    Id: 9,
    Nombre: "Funko Sybill Trelawney",
    Precio: 8420,
    Imagen:
      
    Categoria: "funkos",
  },
  {
    Id: 10,
    Nombre: "Funko Dumbeldore Deluxe ",
    Precio: 10000,
    Imagen:
     
    Categoria: "funkos",
  },
  {
    Id: 11,
    Nombre: "Reliquias de la muerte ",
    Precio: 2500,
    Imagen:
     
    Categoria: "llaveros",
  },
  {
    Id: 12,
    Nombre: "Fenix ",
    Precio: 3000,
    Imagen:
      
    Categoria: "llaveros",
  },
  {
    Id: 13,
    Nombre: "Escudo de Hogwarts",
    Precio: 5000,
    Imagen:
      
    Categoria: "llaveros",
  },
];

JSON.parse(localStorage.getItem("productos")) ||
  localStorage.setItem("productos", JSON.stringify(productos));
