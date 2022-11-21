import { useState, useEffect } from "react";

import "./itemDetail.css";
import { getSingleItem } from "../../services/mockService";
import ItemDetail from "./ItemDetail";
import LoaderItem from "../Loaders/LoaderItem";

import { useParams } from "react-router-dom"

function ItemDetailContainer() {
    
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { idItem } = useParams();

    function getItem() {
        getSingleItem(idItem).then( response => {
            setProduct(response);
            setIsLoading(false);
        })
    }

    useEffect(() => {
            getItem()
        }, []);

    if(isLoading)
        return ( <LoaderItem/> )

    return <ItemDetail product={product}/>
}

export default ItemDetailContainer