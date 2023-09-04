let datausuarios = [
  {
    id: 1,
    Muggle: "Agustina",
    pass: "123456",
    admin: true,
  },
];

JSON.parse(localStorage.getItem("usuarios")) ||
  localStorage.setItem("usuarios", JSON.stringify(datausuarios));
