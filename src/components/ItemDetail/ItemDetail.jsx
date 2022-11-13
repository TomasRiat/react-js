import "./itemDetail.css"

function ItemDetail(imgurl, title, price, description) {
  return (
    <div className="card-detail">
            <div className="card-detail_img">
                <img src= {imgurl} alt={title} />
            </div>
            <div className="card-detail_detail">
                <h2>{title}</h2>
                <p>{description}</p>
                <h3>${price}</h3>
            </div>
    </div>
  )
}

export default ItemDetail