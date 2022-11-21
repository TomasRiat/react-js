import Item from "./Item"
import "./itemList.css"

function ItemList(props) {
    return (
        <div>
            <div className="card-container">
                    {props.products.map( (product)=> {
                        return (
                            <Item key={product.id} product= {product} />
                        );
                    })}
            </div>
        </div>
    )
}

export default ItemList