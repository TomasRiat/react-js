import "./itemCount.css"
import React, {useState} from "react";

function ItemCount(props) {
  let [count, setCount] = useState(1)

  function handleSuma(){
    if ( count < props.stock )
      setCount(count+1)
  }

  function handleResta(){
    if ( count > 1 )
      setCount(count-1)
  }

  return (
    <div className="itemCount">
        <button onClick={handleResta}>-</button>
        <span>{count}</span>
        <button onClick={handleSuma}>+</button>
    </div>
  )
}

export default ItemCount