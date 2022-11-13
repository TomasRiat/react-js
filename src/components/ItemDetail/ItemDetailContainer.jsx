import { useState, useEffect } from "react";

import "./itemDetail.css";
import { getSingleItem } from "../../services/mockService";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom"

function ItemDetailContainer() {
    
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    
    
    async function getItemsAsync(){
        try {
            let response = await getSingleItem(id);
            setProduct(response)
        }
        catch (errorMsg){
            console.error(errorMsg)
        }
    }
    useEffect(
        () => {
            getItemsAsync();
        }, []);

    return <ItemDetail product={product}/>
    
}

export default ItemDetailContainer