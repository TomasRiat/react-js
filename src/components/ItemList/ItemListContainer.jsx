import { useState, useEffect } from "react";

import ItemList from "./ItemList";
import "./itemList.css";
import getItems from "../../services/mockService";
import {useParams} from "react-router-dom";

function ItemListContainer() {
    
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    useEffect(() => {
            getItems(idCategory).then((response) =>
            setProducts(response) )
        }, [idCategory]);

    return (
        <ItemList products={products} />
    )
}

export default ItemListContainer