import { useContext } from "react";
import "./detailCart.css";
import { cartContext } from "../../context/cartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import CardButton from "../CardButton/CardButton";
import { createOrder } from "../../services/firestore";
import { useNavigate } from "react-router-dom";

function DetailCart() {
  const {cart, removeItemCart, clearCart, priceInCart} = useContext(cartContext)
  let navigate = useNavigate();

  if(cart.length === 0 )
    return(
      <div>
        <h1>Carrito Vacio</h1>
      </div>
    )

  async function handleCheckout(evento){
    const order = {
      buyer: {
        name: "Tomas",
        email: "tomasriat@hotmail.com",
        phone: "3413667784"
      },
      items: cart,
      total: priceInCart(),
      date: new Date(),
    }
    const orderId = await createOrder(order)
    navigate(`/endshop/${orderId}`)
  }

  return (
    <div className="cart">
      {cart.map((item) => 
      <section  key={item.id}>
        <article className="cart__detail--container">
          <table className="cart__table">
            <tr className="cart__detail">
              <td className="cart__img"> <img src={item.imgurl} alt="" /></td>
              <td className="cart__title"> {item.title} </td>
              <td className="cart__price"> ${item.price} </td>
              <td className="cart__count"> Cantidad: {item.count} </td>
              <td> <CardButton style= {{padding: "5px 10px"}} onClick= {() => removeItemCart(item.id)} > <FontAwesomeIcon icon= {faTrash} className="cart__remove" /> </CardButton> </td>
            </tr>
          </table>
        </article>
      </section>
      )}
      <div className="clear-cart">
        <CardButton style= {{padding: "5px 70px"}} onClick= {() => clearCart([])} >Vaciar Carrito</CardButton>
        <CardButton style= {{padding: "5px 70px"}} onClick={handleCheckout} >Finalizar Compra</CardButton>
      </div>
    </div>
  )
}

export default DetailCart