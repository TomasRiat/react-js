import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc, orderBy} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyADTrYIFiUtTfukWyIPgQe7qhHhWqI_sRw",
    authDomain: "nunchi-dietetica.firebaseapp.com",
    projectId: "nunchi-dietetica",
    storageBucket: "nunchi-dietetica.appspot.com",
    messagingSenderId: "125654180887",
    appId: "1:125654180887:web:2575e3e208d90cc2e9a852"
};


const app = initializeApp(firebaseConfig);
const DB = getFirestore(app)

// traer documentos

export default async function getItems(){
    const collectionProductos = collection(DB, "productos")
    const documentos = await getDocs(collectionProductos);
    
    const documentsData = documentos.docs.map ( doc => {

        return {
            ...doc.data(), id: doc.id
        }
    });
    return documentsData;
}

export async function getItemsOrdered(){
  const collectionProductos = collection(DB, "productos")
  const q = query(collectionProductos, orderBy("indice"))

  const documentos = await getDocs(q);
  
  const documentsData = documentos.docs.map ( doc => {

      return {
          ...doc.data(), id: doc.id
      }
  });
  return documentsData;
}

// traer documentos por id 

export async function getSingleItem(idParams){

    const docRef = doc(DB, "productos", idParams); 
    const docSnapshot = await getDoc(docRef);

    return{
    ...docSnapshot.data(), 
    id: docSnapshot.id
    }
}

// traer documentos por categoria

export async function getItemsByCategory(categoryParams){
    const collectionRef = collection(DB, "productos");

    const queryCat = query(collectionRef, where("category", "==", categoryParams))

    const documentos = await getDocs(queryCat);
    
    const documentsData = documentos.docs.map ( doc => {

        return {
            ...doc.data(), id: doc.id
        }
    });
    return documentsData;
}

// eviar la orden a firebase

export async function createOrder(order){
    const collectionRef = collection(DB, "orders")
    const docOrder = await addDoc(collectionRef, order)

    return docOrder.id
}

export async function exportArrayToFirestore(){
  const products = [
    {
      indice: 1,
      title: "Pasta de Mani King",
      price: 943,
      stock: 3,
      category: "alimentosNaturales",
      description: "La pasta elaborada a base de man?? es un alimento innovador que se presenta para que lo incorpores a tu alimentaci??n cotidiana. Es utilizado principalmente para untar y consumir en el desayuno o la merienda. Tambi??n pod??s incorporarlo a la preparaci??n de tortas y postres, d??ndole un sabor diferente, rico y suave.",
      imgurl: "/img/1_pasta-mani.png",
    },
    {
      indice: 2,
      title: "Almendras ",
      price: 1593,
      stock: 99,
      category: "alimentosNaturales",
      description: "",
      imgurl: "/img/1_almendras.jpg",
    },
    {
      indice: 3,
      title: "Almohaditas",
      price: 654,
      stock: 92,
      category: "alimentosNaturales",
      description: "Mani | Salvado | Avellana | Chocolate Blanco | Chocolate | Frutilla| Limon | Menta | ",
      imgurl: "/img/1_almohaditas.jpg",
    },
    {
      indice: 4,
      title: "Barras de Cereal Muecas",
      price: 1555,
      stock: 1,
      category: "alimentosNaturales",
      description: "Muecas es una marca urbana y saludable creada para que puedas disfrutarla en cualquier momento del d??a. Alimentos honestos y confiables que puedan acompa??arte cuando la rutina no te permita preparar tus comidas.",
      imgurl: "/img/1_barra-cereal.jpg",
    },
    {
      indice: 5,
      title: "Galletitas Nina",
      price: 906,
      stock: 96,
      category: "alimentosNaturales",
      description: "Galletitas Ninas",
      imgurl: "/img/1_galletitas-nina.jpg",
    },
    {
      indice: 6,
      title: "Alfajor Celienergy",
      price: 364,
      stock: 77,
      category: "alimentosNaturales",
      description: "",
      imgurl: "/img/1_alfajor-celienergy.jpg",
    },
    {
      indice: 7,
      title: "Aceite De Coco Golsa Sin Tacc",
      price: 980,
      stock: 78,
      category: "despensa",
      description: "Aceite de Coco Neutro / 200 Grs y 450 Grs / Sin TACC / Ideal para frituras y reposteria / %100 Aceite de Coco",
      imgurl: "/img/2_aceite-coco.jpg",
    },
    {
      indice: 8,
      title: "Aceite De Oliva BioLive Organico",
      price: 1345,
      stock: 47,
      category: "despensa",
      description: "Es un aceite predominantemente dulce y de frutado ligero, con sutiles notas picantes y amargas. A la vista se presenta amarillo con reflejos verdes, a la nariz ofrece un aroma fresco, donde predominan notas a manzana verde y bals??micos a salvia y menta. En boca es delicado, limpio y bien estructurado.",
      imgurl: "/img/2_aceite-oliva.jpg",
    },
    {
      indice: 9,
      title: "Aceitunas Organicas Terra Sana",
      price: 381,
      stock: 25,
      category: "despensa",
      description: "Las aceitunas en salmuera son elaboradas artesanalmente, utilizando frutos de producci??n org??nica que se cultivan en un ambiente ecol??gico, libre de fertilizantes artificiales, herbicidas e insecticidas qu??micos, cumpliendo estrictamente las pautas de certificaci??n org??nica.",
      imgurl: "/img/2_aceitunas.png",
    },
    {
      indice: 10,
      title: "Qu??noa Facil Frams",
      price: 1283,
      stock: 41,
      category: "despensa",
      description: "Lista - Con vegetales ??? Con champi??ones / Libre de Gluten | 100% Grano Integral / Cocci??n en 15 / Rinde 3 porciones / Peso Neto: 200 gr.",
      imgurl: "/img/2_quinoa.png",
    },
    {
      indice: 11,
      title: "Sal Rosada del Himalaya",
      price: 702,
      stock: 53,
      category: "despensa",
      description: "",
      imgurl: "/img/2_sal-himalaya.jpg",
    },
    {
      indice: 12,
      title: "Salsas de Soja Lee Kum Kee",
      price: 1850,
      stock: 11,
      category: "despensa",
      description: "La salsa de soja Lee Kum Kee es de un color negro intenso y con una textura ??nica  tiene un sabor m??s fuerte y con m??s presencia que la salsa de soja clara. Aunque curiosamente tiene un contenido en sal mucho m??s bajo que esta. En el proceso de fabricaci??n de la salsa Lee Kum Kee, ya destacan sabor y calidad.",
      imgurl: "/img/2_salsa-soja.png",
    },
    {
      indice: 13,
      title: "Jugo de Arandanos Sin Azucar Caba??a Mico",
      price: 989,
      stock: 57,
      category: "bebidasEinfusiones",
      description: "Propiedades del fruto de Ar??ndanos: Antioxidante. / Alto contenido de Vitamina C. / Previene y ayuda a combatir infecciones del tracto urinario. / Favorece la micro circulaci??n retiniana y cerebral. / Digestivo y normalizador de la funci??n intestinal por su alto contenido en fibra. // El ar??ndano es una fruta muy apreciada por su sabor y frescura sumado a sus propiedades de protecci??n de la salud, consulte con su m??dico para mayor informaci??n acerca de las propiedades de esta exquisita fruta.",
      imgurl: "/img/3_jugo-arandanos.png",
    },
    {
      indice: 14,
      title: "Jugos Naturales Estancia los Naranjos",
      price: 465,
      stock: 19,
      category: "bebidasEinfusiones",
      description: "Sabores: Naranja / Frutilla y Naranja / Anana y Naranja / Duranzno y Naranja / Pomelo Rosado / Naranja y Maracuya",
      imgurl: "/img/3_jugos-naturales.jpg",
    },
    {
      indice: 15,
      title: "Leche de Almendras Pampa Vida",
      price: 1764,
      stock: 71,
      category: "bebidasEinfusiones",
      description: "Bebida a base de almendras con agregado de calcio y vitaminas A y B12, libre de gluten. Sin T.A.C.C.",
      imgurl: "/img/3_leche-almendras.jpg",
    },
    {
      indice: 16,
      title: "Leche de Coco Cocoon",
      price: 624,
      stock: 5,
      category: "bebidasEinfusiones",
      description: "sdgsdgsdgas",
      imgurl: "/img/3_leche-coco.png",
    },
    {
      indice: 17,
      title: "Infusiones de T?? Inti Zen",
      price: 1870,
      stock: 6,
      category: "bebidasEinfusiones",
      description: "El mejor sabor a Coco en una bebida 100% vegetal, sin az??car agregada y con solo 33 calor??as por porci??n. ??Tiene un sabor incre??ble y un aroma para hacerte sentir de vacaciones en cualquier momento, tomala bien fr??a sola o en tus licuados!",
      imgurl: "/img/3_te.jpg",
    },
    {
      indice: 18,
      title: "Yerba Mate Org??nica Oasis",
      price: 1583,
      stock: 28,
      category: "bebidasEinfusiones",
      description: "",
      imgurl: "/img/3_yerba.jpg",
    },
    {
      indice: 19,
      title: "Aceite de Rosa Mosqueta Botanika",
      price: 579,
      stock: 27,
      category: "cosmetica",
      description: "Nuestro ACEITE PURO DE ROSA MOSQUETA extra??do de primera presi??n en fr??o aporta ??cidos grasos esenciales indispensables para el proceso de regeneraci??n de la membrana celular. Indicado para mejorar la salud y apariencia de las pieles con falta de elasticidad. Su efecto nutritivo ayuda en la aplicaci??n sobre manchas y cicatrices de manera efectiva.  Beneficios:  Favorece el proceso de regeneraci??n celular / Previene el envejecimiento prematuro / Hidrata y nutre profundamente /  Evita la formaci??n de arrugas",
      imgurl: "/img/4_aceite-rosa-mosqueta.jpg",
    },
    {
      indice: 20,
      title: "Cepillo De Dientes Biodegradable de Bambu Meraki",
      price: 202,
      stock: 63,
      category: "cosmetica",
      description: "Meraki ofrece el primer cepillo de dientes sustentable, fabricado con bambu materia prima que no necesita de intervencion del hombre, riego o pesticidas para ser una de las plantas de mayor crecimiento en el planeta.",
      imgurl: "/img/4_cepillo-dientes.jpg",
    },
    {
      indice: 21,
      title: "Gel de Aloe Vera Jual",
      price: 306,
      stock: 40,
      category: "cosmetica",
      description: "Obtenido por procesamiento en fr??o, lo que garantiza que no se eliminen las propiedades del aloe vera. Fuente de hidrataci??n para tu piel, protege, alivia y reduce el enrojecimiento y la irritaci??n de la piel. (No contiene alcohol). Debido al contenido de Esteroles, inhibe la inflamaci??n y logra un efecto refrescante y calmante. Es un excelente post-solar de r??pida absorci??n y, utilizado en pieles irritadas por depilaci??n, afeitado o quemaduras, ayuda a suavizar, humectar y enfriar las zonas afectadas. Este gel de aloe vera, adem??s de hidratar la piel de forma natural y perceptible de inmediato luego de la aplicaci??n, aumenta en 8 veces la producci??n de c??lulas responsables de mantener activas e hidratadas las fibras col??genas, que forman parte de las capas de la piel. De esta forma, protege la piel de los efectos nocivos y envejecedores por la exposici??n solar y act??a como filtro de los rayos UV.",
      imgurl: "/img/4_gel-aloeVera.jpg",
    },
    {
      indice: 22,
      title: "Jabones Vegetales Naturales SriSri",
      price: 814,
      stock: 87,
      category: "cosmetica",
      description: "La pureza del s??ndalo es el  coraz??n de este jab??n. Elaborado con ingredientes cuidadosamente seleccionados, para darte la generosidad de la naturaleza. Este jab??n nutre tu piel y su aroma relajante har?? tu ba??o a??n m??s placentero.",
      imgurl: "/img/4_jabones-naturales.jpg",
    },
    {
      indice: 23,
      title: "Serum Facial Glow Boost Veganis",
      price: 1463,
      stock: 39,
      category: "cosmetica",
      description: "Este Serum Facial Glow Boost Veganis reafirma y regenera el tejido de la piel. Es un concentrado de extractos oleosos vegetales y esenciales que penetra alcanzando las capas mas profundas de la piel, proporcionando hidrataci??n y tonificaci??n de rostro y cuello. Alivia y repara hasta las pieles mas sensibles, suaviza y protege la piel. Ideal para uso diario y para todo tipos de pieles.",
      imgurl: "/img/4_serum.jpg",
    },
    {
      indice: 24,
      title: "Shampoo Veganis",
      price: 1873,
      stock: 5,
      category: "cosmetica",
      description: "Palta-Aguacate & Oliva Organicoo // Coco, Calendula & Oliva Organico",
      imgurl: "/img/4_shampoo.jpg",
    },
    {
      indice: 25,
      title: "Ajo Negro Natier",
      price: 482,
      stock: 80,
      category: "suplementosNaturales",
      description: "El Ajo Negro es un excelente alimento altamente nutritivo y energ??tico con importantes resultados y eficacia en personas que padecen de diabetes, hipertensi??n, colesterol alto, entre otras afecciones. Posee un gran n??mero de amino??cidos esenciales totalmente biodisponibles para ser absorbidos por nuestro cuerpo, impulsa el sistema inmunol??gico, reduce la fatiga del organismo manteniendo y renovando la salud.",
      imgurl: "/img/5_ajo-negro.png",
    },
    {
      indice: 26,
      title: "Clorofila Liquida",
      price: 1602,
      stock: 45,
      category: "suplementosNaturales",
      description: "La clorofila es el pigmento verde que se encuentra en los  cloroplastos de plantas y algas. Aprovecha la energ??a del sol en el proceso  de fotos??ntesis y ayuda en funciones metab??licas tales como la oxigenaci??n y el crecimiento celular.",
      imgurl: "/img/5_clorofila.jpg",
    },
    {
      indice: 27,
      title: "Jalea Real Capsulas Natier",
      price: 988,
      stock: 92,
      category: "suplementosNaturales",
      description: "Normalizadora de la presi??n arterial. Act??a tambi??n sobre la piel renovando las c??lulas y tonificando los tejidos. Combate el debilitamiento f??sico, muscular y mental. Disminuye sensiblemente  el colesterol.",
      imgurl: "/img/5_jalea-real.png",
    },
    {
      indice: 28,
      title: "Omega 3 Duo Vitamin Way",
      price: 804,
      stock: 3,
      category: "suplementosNaturales",
      description: "El suplemento nutricional Omega 3 D??O Vitamin Way?? ayuda a reducir el colesterol, los triglic??ridos y el riesgo cardiovascular. La combinaci??n del Omega 3 de origen vegetal + Omega 3 marino permite aprovechar al m??ximo todos los beneficios individuales de los dos aceites en una sola c??psula blanda.",
      imgurl: "/img/5_omega3.jpg",
    },
    {
      indice: 29,
      title: "Spirulina Org??nica HG",
      price: 1650,
      stock: 53,
      category: "suplementosNaturales",
      description: "Considerada el Alimento del futuro, estas microalgas contienen m??s del 65% de prote??nas ricas en amino??cidos esenciales, vitaminas, minerales y compuestos antioxidantes.",
      imgurl: "/img/5_spirulina.jpg",
    },
    {
      indice: 30,
      title: "Vitamina C Concentrada",
      price: 753,
      stock: 85,
      category: "suplementosNaturales",
      description: "Nuestro sistema inmunol??gico requiere de grandes cantidades de vitamina C para producir compuestos enzim??ticos capaces de luchar contra las infecciones. La suplementaci??n con vitamina C nos ayuda a reducir el riesgo de contraer infecciones y la duraci??n de los s??ntomas. Este nutriente imprescindible para la funci??n del metabolismo energ??tico normal combate la fatiga general. Adem??s contribuye en la formaci??n de col??geno, manteniendo la piel, los dientes y el sistema circulatorio en buen estado. Nuestra f??rmula extra??da de fuentes naturales es altamente efectiva y biodisponible. Puede ser ingerida en cualquier momento del d??a o bien 30 minutos antes o despu??s de cualquiera de las principales comidas, para su correcta y total absorci??n.",
      imgurl: "/img/5_vitaminaC.jpg",
    },
    {
      indice: 31,
      title: "Carbon Defumador Neutro Sagrada Madre",
      price: 1991,
      stock: 68,
      category: "hogar",
      description: "C??MO USAR? Con el espacio limpio, primero debes encender el carb??n vegetal dentro del sahumador o recipiente no inflamable, libera el primer humo que desprende en el exterior. Luego deposita las hierbas y resinas sobre el carb??n y recorre todo el ambiente con el humo sagrado de tu sahumado. ",
      imgurl: "/img/6_carbon-defumador.jpg",
    },
    {
      indice: 32,
      title: "Lampara de Sal",
      price: 2500,
      stock: 27,
      category: "hogar",
      description: "Lamparas de sal de Himalaya. Con cable con tecla, base y l??mparas. Set completo. Al ser r??sticas, son piezas ??nicas y todas diferentes. No tienen una altura o peso uniforme. Una l??mpara de sal del Himalaya en el sal??n, o en la oficina o dormitorio, es como tener una ventana abierta, es una fuente natural de aire fresco y limpio que llena de vitaminas el aire.",
      imgurl: "/img/6_lampara-sal.jpeg",
    },
    {
      indice: 33,
      title: "Perlas Aromaticas Sagrada Madre",
      price: 1709,
      stock: 71,
      category: "hogar",
      description: "Composicion: Aceite concentrado arom??tico, aceites esenciales, harina de madera, aglutinante natural // Usos: Se puede usar como esencia s??lida para hornillos, con o sin agua. ",
      imgurl: "/img/6_perlas-aromaticas.jpg",
    },
    {
      indice: 34,
      title: "Sahumador Porta Sahumerio Sagrada Madre",
      price: 263,
      stock: 54,
      category: "hogar",
      description: "",
      imgurl: "/img/6_sahumador.jpeg",
    },
    {
      indice: 35,
      title: "Sahumerio Natural Sagrada Madre",
      price: 870,
      stock: 74,
      category: "hogar",
      description: "Sahumerios Artesanales Naturales L??nea Sagrada Madre.Fabricados con resinas naturales, producto 100 % ecol??gico. Ideal para limpieza energ??tica de todos tus ambientes.EXTRA DURACI??N - CALIDAD PREMIUM",
      imgurl: "/img/6_sahumerios.jpg",
    },
    {
      indice: 36,
      title: "Sahumo Sagrada Madre",
      price: 586,
      stock: 32,
      category: "hogar",
      description: " Multihierbas y Flores // Flores Rojas: s??mbolo universal del Amor y la Pasion. / Flores Rosas: compasi??n y bondad. / Flores Amarillas: cambio en la vida, alegria, felicidad y energ??a. / Flores lilas y violetas: uni??n espiritual, sabidur??a y ??xito. Flor / Blancas: brindan un ambiente de tranquilidad y pureza. / Flores Verdes: equilibrio entre el cuerpo y el alma. ",
      imgurl: "/img/6_sahumo.jpg",
    },
    {
      indice: 37,
      title: "Frutillas Congeladas",
      price: 1080,
      stock: 34,
      category: "refrigerados",
      description: "Las Frutillas son ricas en fibra, antioxidantes, vitaminas y minerales, lo que ayuda a mantener un intestino saludable. Los antioxidantes ayudan en la absorci??n de nutrientes clave, adem??s de las prote??nas y el hierro. La fibra juega un papel fundamental para ayudar a hacer la digesti??n y regularla",
      imgurl: "/img/7_frutillas-congeladas.png",
    },
    {
      indice: 38,
      title: "Hamburguesas de Legumbres Kaia",
      price: 460,
      stock: 47,
      category: "refrigerados",
      description: "Productos son elaborados sin conservantes, colorantes, ni aditivos que da??an el sistema inmunol??gico y digestivo. Elaboradas con cereales, vegetales, y legumbres de la mejor calidad cuidando la salud y bienestar de quien las consume.???",
      imgurl: "/img/7_hamburguesas-legumbres.jpg",
    },
    {
      indice: 39,
      title: "Hamburguesas Not Burger - NotCo",
      price: 690,
      stock: 15,
      category: "refrigerados",
      description: "Agua, prote??na texturizada de arveja, aceite de coco, aceite de girasol alto oleico, fibra de bamb??, prote??na aislada de arveja, sal, prote??na asilada de arroz, cacao alcalino en polvo, prote??na aislada de ch??a, espinaca en polvo. COL: rojo de remolacha.**Este producto al igual que todos los de origen vegetal, no contiene colesterol.",
      imgurl: "/img/7_hamburguesas-notBurguer.jpg",
    },
    {
      indice: 40,
      title: "Provoleta Vegana Felices las Vacas",
      price: 800,
      stock: 31,
      category: "refrigerados",
      description: "Provoleta de almendras y casta??a. Sabor ??nico y delicioso para disfrutarlo fundido por dentro y crocante por fuera. // INGREDIENTES : Agua, almendras, casta??as de caj??, aceite de coco, aceite vegetal, harina de arroz, f??cula de mandioca, prote??na de arveja, levadura, jugo de lim??n, sal, c??rcuma, paprika, ARO: queso provolone.",
      imgurl: "/img/7_provoleta-vegana.png",
    },
    {
      indice: 41,
      title: "Quesos Vegetales Crudda",
      price: 615,
      stock: 12,
      category: "refrigerados",
      description: "Sin l??cteos | Sin gluten | Sin conservantes",
      imgurl: "/img/7_queso-vegetal.jpg",
    },
    {
      indice: 42,
      title: "Yogures Bebibles Veganos y Prote??cos",
      price: 986,
      stock: 48,
      category: "refrigerados",
      description: "El primer yogur vegano fuente de prote??nas de Argentina. Delicioso, saludable y nutritivo, con mucha prote??na vegetal. ",
      imgurl: "/img/7_yogurt-vegano.png",
    },
  
  ];
  
    const collectionRef = collection(DB, "productos")

    for (let item of products) {
        let docOrder = await addDoc(collectionRef, item);
        console.log("documento creado, id:", docOrder.id)
    }
}