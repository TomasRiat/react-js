import { useState, useEffect } from "react";

import Item from "./Item";
import "./itemList.css";
import getItems from "../../services/mockService";

function ItemListContainer(props) {
    
    const [products, setProducts] = useState([]);
    
    async function getItemsAsync(){
        try {
            let response = await getItems();
            setProducts(response)
        }
        catch (errorMsg){
            console.error(errorMsg)
        }
    }
    useEffect(
        () => {
            getItemsAsync()
        },
        []
    );

    return (
        <div>
            <h1>{props.greeting}</h1>
            <div className="card-container">
                    {products.map( (product)=> {
                        return (
                            <Item
                            key={product.id}
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