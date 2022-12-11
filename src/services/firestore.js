import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where} from "firebase/firestore"

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

export async function createOrder(){
    
}