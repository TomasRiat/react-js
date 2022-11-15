import "./itemDetail.css"

function ItemDetail({product}) {
  return (
    <div className="card-detail">
            <div className="card-detail_img">
                <img src= {product.imgurl} alt={product.title} />
            </div>
            <div className="card-detail_detail">
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <h3>${product.price}</h3>
            </div>
    </div>
  )
}

export default ItemDetail