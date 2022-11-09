import Item from "./Item";
import "./itemList.css";
import products from "../../data/data.js";

function ItemListContainer(props) {
    return (
        <div>
            <h1>{props.greeting}</h1>
            <div>
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