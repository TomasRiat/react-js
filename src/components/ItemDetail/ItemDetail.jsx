import ButtonAddCart from "../Click/ButtonAddCart"
import ItemCount from "../Click/ItemCount"
import "./itemDetail.css"

function ItemDetail({product}) {
  return (
    <div className="card-detail">
            <div className="card-detail_img">
                <img src= {product.imgurl} alt={product.title} />
            </div>
            <div className="card-detail_detail">
                <h2>{product.title}</h2>
                <h3>${product.price}</h3>
                <div className="card-interaction">
                  <ItemCount stock= {product.stock} />
                  <ButtonAddCart id= {product.id} />
                </div>
                <p>{product.description}</p>
            </div>
    </div>
  )
}

export default ItemDetail