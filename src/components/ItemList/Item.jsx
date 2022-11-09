
function Item({title, imgurl, price}) {
    return (
        <div className="card">
            <div className="card-img">
                <img src= {imgurl} alt={title} />
            </div>
            <div>
                <h3>{title}</h3>
                <p>${price}</p>
            </div>
        </div>
    )
}

export default Item