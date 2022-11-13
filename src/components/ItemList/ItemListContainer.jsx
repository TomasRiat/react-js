import { useState, useEffect } from "react";

import Item from "./Item";
import "./itemList.css";
import getItems from "../../services/mockService";
import {useParams} from "react-router-dom";

function ItemListContainer() {
    
    const [products, setProducts] = useState([]);
    const { idCategory } = useParams();

    
    async function getItemsAsync(){
        let response = await getItems(idCategory);
        setProducts(response)
    }
    useEffect(
        () => {
            getItemsAsync()
        }, [idCategory]);

    return (
        <div>
            <div className="card-container">
                    {products.map( (product)=> {
                        return (
                            <Item
                            key={product.id}

                            id={product.id}
                            imgurl={product.imgurl}
                            title={product.title}
                            price={product.price}
                            category={product.category}
                            />
                        );
                    })}
            </div>
        </div>
    )
}

export default ItemListContainer