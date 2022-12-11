import { useState, useEffect } from "react";

import ItemList from "./ItemList";
import "./itemList.css";
import getItems, { getItemsByCategory } from "../../services/firestore";
import {useParams} from "react-router-dom";
import LoaderItem from "../Loaders/LoaderItem";

function ItemListContainer() {
    
    const [products, setProducts] = useState(null);
    const { idCategory } = useParams();

    async function getItemsAsync(){
        if( !idCategory ){
            let respuesta = await getItems()
            setProducts(respuesta)
        }
        else{
            let respuesta = await getItemsByCategory(idCategory)
            setProducts(respuesta)
        }
    }

    useEffect(() => { 
            getItemsAsync()
        }, [idCategory]);

    return <>{ products ? <ItemList products={products} /> : <LoaderItem/> }</> 
}

export default ItemListContainer