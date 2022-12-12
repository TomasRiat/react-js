import { useParams } from "react-router-dom"

function EndShop() {
  const idOrder = useParams().idOrder

  return (
    <div>
      <h1>Gracias por tu compra</h1>
      <p>El id de tu compra es: {idOrder}</p>
    </div>
  )
}

export default EndShop