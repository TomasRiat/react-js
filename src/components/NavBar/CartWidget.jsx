
import {useContext} from "react";
import { cartContext } from "../../context/cartContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function CartWidget() {
    const miContext = useContext(cartContext)

    return (
        <Link to="" className="cartContainer">
            <FontAwesomeIcon icon= {faCartShopping} className="cartIcon"/>
            <span>{miContext.itemsInCart()}</span>
        </Link>
    )
}

export default CartWidget