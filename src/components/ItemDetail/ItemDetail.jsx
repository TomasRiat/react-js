import ItemCount from "../Click/ItemCount";
import "./itemDetail.css";
import {useState, useContext} from "react"
import { cartContext } from "../../context/cartContext";
import CardButton from "../CardButton/CardButton"
import { Link } from "react-router-dom";

function ItemDetail({product}) {
  const {addToCart} = useContext(cartContext)
  
  let [addedToCart, setAddedToCart] = useState(false)

  function onAddToCart(count){
    setAddedToCart(count)

    addToCart(product, count)
  }

  return (
    <div className="card-detail">
            <div className="card-detail_img">
                <img src= {product.imgurl} alt={product.title} />
            </div>
            <div className="card-detail_detail">
                <h2>{product.title}</h2>
                <h3>${product.price}</h3>
                <div className="card-interaction"> 
                  {
                    addedToCart === false ? (<ItemCount onAddToCart={onAddToCart} stock= {product.stock} />) : ( <Link to="/cart"><CardButton>Ver Carrito</CardButton></Link> )
                  }
                </div>
                <p>{product.description}</p>
            </div>
    </div>
  )
}

export default ItemDetail