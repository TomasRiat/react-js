import "./item.css";
import { Link } from "react-router-dom"
import CardButton from "../CardButton/CardButton";
import ButtonAddFavs from "../Click/ButtonAddFavs";

function Item({title, imgurl, price, id}) {
    const urlDetail = `/detail/${id}`;
    return (
        <div className="card">
            <ButtonAddFavs/>
            <div className="card-img">
                <img src= {imgurl} alt={title} />
            </div>
            <div className="card-content">
                <h3>{title}</h3>
                <p>${price}</p>
            </div>
            <Link to={urlDetail}>
                <CardButton>Ver más</CardButton>
            </Link>
            
        </div>
    )
}

export default Item