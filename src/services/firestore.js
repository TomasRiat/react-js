import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs} from "firebase/firestore"

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