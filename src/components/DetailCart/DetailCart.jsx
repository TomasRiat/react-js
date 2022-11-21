import { useContext } from "react";
import "./detailCart.css";
import { cartContext } from "../../context/cartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function DetailCart() {
  const {cart, removeItemCart, clearCart, priceInCart} = useContext(cartContext)


  return (
    <div className="cart">
      {cart.map((item) => 
      <section className="cart__detail--container">
        <table className="cart__table">
          <tr className="cart__detail">
            <td className="cart__img"> <img src={item.imgurl} alt="" /></td>
            <td className="cart__title"> {item.title} </td>
            <td className="cart__price"> ${item.price} </td>
            <td className="cart__count"> Cantidad: {item.count} </td>
            <td><FontAwesomeIcon icon= {faTrash} className="cart__remove" /></td>
          </tr>
        </table>




        <article>
          <div>
            
          </div>
        </article>
      </section>
      )}
    </div>
  )
}

export default DetailCart