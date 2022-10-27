

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import * as iconList from "@fortawesome/free-solid-svg-icons";

function CartWidget() {

    console.log(iconList);
    return (
        <a href="." className="cartContainer">
            <FontAwesomeIcon icon= {faCartShopping} className="cartIcon"/>
        </a>
    )
}

export default CartWidget