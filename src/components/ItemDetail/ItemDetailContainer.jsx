import { useState, useEffect } from "react";

import "./itemDetail.css";
import { getSingleItem } from "../../services/mockService";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom"

function ItemDetailContainer() {
    
    const [product, setProduct] = useState([]);
    const { idItem } = useParams();

    async function getItemsAsync(){
            let response = await getSingleItem(idItem);
            setProduct(response)
    }
    useEffect(
        () => {
            getItemsAsync();
        }, []);

    return <ItemDetail product={product}/>
}

export default ItemDetailContainer