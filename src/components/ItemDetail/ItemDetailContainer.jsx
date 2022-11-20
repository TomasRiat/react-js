import { useState, useEffect } from "react";

import "./itemDetail.css";
import { getSingleItem } from "../../services/mockService";
import ItemDetail from "./ItemDetail";

import { useParams } from "react-router-dom"

function ItemDetailContainer() {
    
    const [product, setProduct] = useState([]);
    const { idItem } = useParams();

    useEffect(() => {
            getSingleItem(idItem).then((response) =>
            setProduct(response) )
        }, [idItem]);

    return <ItemDetail product={product}/>
}

export default ItemDetailContainer