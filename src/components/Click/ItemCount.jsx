import "./itemCount.css"
import React, {useState} from "react";


function ItemCount({stock, onAddToCart}) {
  let [count, setCount] = useState(1)

  function handleSuma(){
    if ( count < stock )
      setCount(count+1)
  }

  function handleResta(){
    if ( count > 1 )
      setCount(count-1)
  }

  return (
    <div className="detail-interactive">
      <div className="itemCount">
          <button onClick={handleResta}>-</button>
          <span>{count}</span>
          <button onClick={handleSuma}>+</button>
      </div>
      <div className="buttonAddCart">
        <button onClick={()=> onAddToCart(count)}>
            Agregar al Carrito
        </button>
      </div>
    </div>
  )
}

export default ItemCount