const products = [
  {
    id: 1,
    title: "Pasta de Mani King",
    price: 943,
    stock: 3,
    category: "alimentosNaturales",
    imgurl: "/img/1_pasta-mani.png",
  },
  {
    id: 2,
    title: "Almendras ",
    price: 1593,
    stock: 99,
    category: "alimentosNaturales",
    imgurl: "/img/1_almendras.jpg",
  },
  {
    id: 3,
    title: "Almohaditas",
    price: 654,
    stock: 92,
    category: "alimentosNaturales",
    imgurl: "/img/1_almohaditas.jpg",
  },
  {
    id: 4,
    title: "Barras de Cereal",
    price: 1555,
    stock: 1,
    category: "alimentosNaturales",
    imgurl: "/img/1_barra-cereal.jpg",
  },
  {
    id: 5,
    title: "Galletitas Nina",
    price: 906,
    stock: 96,
    category: "alimentosNaturales",
    imgurl: "/img/1_galletitas-nina.jpg",
  },
  {
    id: 6,
    title: "Alfajor Celienergy",
    price: 364,
    stock: 77,
    category: "alimentosNaturales",
    imgurl: "/img/1_alfajor-celienergy.jpg",
  },
  {
    id: 7,
    title: "Aceite De Coco Golsa Sin Tacc",
    price: 980,
    stock: 78,
    category: "despensa",
    imgurl: "/img/2_aceite-coco.jpg",
  },
  {
    id: 8,
    title: "Aceite De Oliva BioLive Organico",
    price: 1345,
    stock: 47,
    category: "despensa",
    imgurl: "/img/2_aceite-oliva.jpg",
  },
  {
    id: 9,
    title: "Aceitunas Organicas Terra Sana",
    price: 381,
    stock: 25,
    category: "despensa",
    imgurl: "/img/2_aceitunas.png",
  },
  {
    id: 10,
    title: "Quínoa Facil Frams",
    price: 1283,
    stock: 41,
    category: "despensa",
    imgurl: "/img/2_quinoa.png",
  },
  {
    id: 11,
    title: "Sal Rosada del Himalaya",
    price: 702,
    stock: 53,
    category: "despensa",
    imgurl: "/img/2_sal-himalaya.jpg",
  },
  {
    id: 12,
    title: "Salsas de Soja Lee Kum Kee",
    price: 1850,
    stock: 11,
    category: "despensa",
    imgurl: "/img/2_salsa-soja.png",
  },
  {
    id: 13,
    title: "Jugo de Arandanos Sin Azucar Cabaña Mico",
    price: 989,
    stock: 57,
    category: "bebidasEinfusiones",
    imgurl: "/img/3_jugo-arandanos.png",
  },
  {
    id: 14,
    title: "Jugos Naturales Estancia los Naranjos",
    price: 465,
    stock: 19,
    category: "bebidasEinfusiones",
    imgurl: "/img/3_jugos-naturales.jpg",
  },
  {
    id: 15,
    title: "Leche de Almendras Pampa Vida",
    price: 1764,
    stock: 71,
    category: "bebidasEinfusiones",
    imgurl: "/img/3_leche-almendras.jpg",
  },
  {
    id: 16,
    title: "Leche de Coco Cocoon",
    price: 624,
    stock: 5,
    category: "bebidasEinfusiones",
    imgurl: "/img/3_leche-coco.png",
  },
  {
    id: 17,
    title: "Infusiones de Té Inti Zen",
    price: 1870,
    stock: 6,
    category: "bebidasEinfusiones",
    imgurl: "/img/3_te.jpg",
  },
  {
    id: 18,
    title: "Yerba Mate Orgánica Oasis",
    price: 1583,
    stock: 28,
    category: "bebidasEinfusiones",
    imgurl: "/img/3_yerba.jpg",
  },
  {
    id: 19,
    title: "Aceite de Rosa Mosqueta Botanika",
    price: 579,
    stock: 27,
    category: "cosmetica",
    imgurl: "/img/4_aceite-rosa-mosqueta.jpg",
  },
  {
    id: 20,
    title: "Cepillo De Dientes Biodegradable de Bambu Meraki",
    price: 202,
    stock: 63,
    category: "cosmetica",
    imgurl: "/img/4_cepillo-dientes.jpg",
  },
  {
    id: 21,
    title: "Gel de Aloe Vera Jual",
    price: 306,
    stock: 40,
    category: "cosmetica",
    imgurl: "/img/4_gel-aloeVera.jpg",
  },
  {
    id: 22,
    title: "Jabónes Vegetales Botanika",
    price: 814,
    stock: 87,
    category: "cosmetica",
    imgurl: "/img/4_jabones-naturales.jpg",
  },
  {
    id: 23,
    title: "Serum Facial Multivitamínico Bel Lab",
    price: 1463,
    stock: 39,
    category: "cosmetica",
    imgurl: "/img/4_serum.jpg",
  },
  {
    id: 24,
    title: "Shampoo Veganis",
    price: 1873,
    stock: 5,
    category: "cosmetica",
    imgurl: "/img/4_shampoo.jpg",
  },
  {
    id: 25,
    title: "Ajo Negro Natier",
    price: 482,
    stock: 80,
    category: "suplementosNaturales",
    imgurl: "/img/5_ajo-negro.png",
  },
  {
    id: 26,
    title: "Clorofila Liquida",
    price: 1602,
    stock: 45,
    category: "suplementosNaturales",
    imgurl: "/img/5_clorofila.jpg",
  },
  {
    id: 27,
    title: "Jalea Real Capsulas Natier",
    price: 988,
    stock: 92,
    category: "suplementosNaturales",
    imgurl: "/img/5_jalea-real.png",
  },
  {
    id: 28,
    title: "Omega 3 Duo Vitamin Way",
    price: 804,
    stock: 3,
    category: "suplementosNaturales",
    imgurl: "/img/5_omega3.jpg",
  },
  {
    id: 29,
    title: "Spirulina Orgánica HG",
    price: 1650,
    stock: 53,
    category: "suplementosNaturales",
    imgurl: "/img/5_spirulina.jpg",
  },
  {
    id: 30,
    title: "Vitamina C Concentrada",
    price: 753,
    stock: 85,
    category: "suplementosNaturales",
    imgurl: "/img/5_vitaminaC.jpg",
  },
  {
    id: 31,
    title: "Carbon Defumador Neutro Sagrada Madre",
    price: 1991,
    stock: 68,
    category: "hogar",
    imgurl: "/img/6_carbon-defumador.jpg",
  },
  {
    id: 32,
    title: "Lampara de Sal",
    price: 2500,
    stock: 27,
    category: "hogar",
    imgurl: "/img/6_lampara-sal.jpeg",
  },
  {
    id: 33,
    title: "Perlas Aromaticas Sagrada Madre",
    price: 1709,
    stock: 71,
    category: "hogar",
    imgurl: "/img/6_perlas-aromaticas.jpg",
  },
  {
    id: 34,
    title: "Sahumador Porta Sahumerio Sagrada Madre",
    price: 263,
    stock: 54,
    category: "hogar",
    imgurl: "/img/6_sahumador.jpeg",
  },
  {
    id: 35,
    title: "Sahumerio Natural Sagrada Madre",
    price: 870,
    stock: 74,
    category: "hogar",
    imgurl: "/img/6_sahumerios.jpg",
  },
  {
    id: 36,
    title: "Sahumo Sagrada Madre",
    price: 586,
    stock: 32,
    category: "hogar",
    imgurl: "/img/6_sahumo.jpg",
  },
  {
    id: 37,
    title: "Frutillas Congeladas",
    price: 1080,
    stock: 34,
    category: "refrigerados",
    imgurl: "/img/7_frutillas-congeladas.png",
  },
  {
    id: 38,
    title: "Hamburguesas de Legumbres Kaia",
    price: 460,
    stock: 47,
    category: "refrigerados",
    imgurl: "/img/7_hamburguesas-legumbres.jpg",
  },
  {
    id: 39,
    title: "Hamburguesas Not Burger - NotCo",
    price: 690,
    stock: 15,
    category: "refrigerados",
    imgurl: "/img/7_hamburguesas-notBurguer.jpg",
  },
  {
    id: 40,
    title: "Provoleta Vegana Felices las Vacas",
    price: 800,
    stock: 31,
    category: "refrigerados",
    imgurl: "/img/7_provoleta-vegana.png",
  },
  {
    id: 41,
    title: "Quesos Vegetales Crudda",
    price: 615,
    stock: 12,
    category: "refrigerados",
    imgurl: "/img/7_queso-vegetal.jpg",
  },
  {
    id: 42,
    title: "Yogures Bebibles Veganos y Proteícos",
    price: 986,
    stock: 48,
    category: "refrigerados",
    imgurl: "/img/7_yogurt-vegano.png",
  },

];

export default products;