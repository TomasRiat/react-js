import { useState, useEffect } from "react";

import ItemList from "./ItemList";
import "./itemList.css";
import getItems from "../../services/firestore";
import {useParams} from "react-router-dom";
import LoaderItem from "../Loaders/LoaderItem";

function ItemListContainer() {
    
    const [products, setProducts] = useState(null);
    const { idCategory } = useParams();

    useEffect(() => { 
            getItems(idCategory).then((response) =>
            setProducts(response) )
        }, [idCategory]);

    return <>{ products ? <ItemList products={products} /> : <LoaderItem/> }</> 
}

export default ItemListContainer