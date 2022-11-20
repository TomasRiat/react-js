import "./item.css";
import { Link } from "react-router-dom"
import CardButton from "../CardButton/CardButton";
import ButtonAddFavs from "../Click/ButtonAddFavs";

function Item({product}) {
    const urlDetail = `/detail/${product.id}`;
    return (
        <div className="card">
            <ButtonAddFavs/>
            <div className="card-img">
                <img src= {product.imgurl} alt={product.title} />
            </div>
            <div className="card-content">
                <h3>{product.title}</h3>
                <p>${product.price}</p>
            </div>
            <div className="card-buttons">
                <Link to={urlDetail}>
                    <CardButton>Ver más</CardButton>
                </Link>
            </div>
        </div>
    )
}

export default Item