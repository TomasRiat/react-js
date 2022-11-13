import CartWidget from "./CartWidget"
import { Link } from "react-router-dom"
function NavBar() {
    return (
        <div className="navContainer">
            <div className="navBar1">
                <h1 className="title"> <Link to="/">Dietetica Nunchi</Link></h1>
                <CartWidget/>
            </div>
            <ul className="navBar2">
                <li className="navItem">
                    <Link to="/category/alimentosNaturales" className="navLink">Alimentos Naturales</Link> 
                </li>
                <li className="navItem">
                    <Link to="/category/despensa" className="navLink">Despensa</Link> 
                </li>
                <li className="navItem">
                    <Link to="/category/bebidasEinfusiones" className="navLink">Bebidas e Infusiones</Link>
                </li>
                <li className="navItem">
                    <Link to="/category/cosmetica" className="navLink">Cosmética & Cuidado de la Salud</Link> 
                </li>
                <li className="navItem">
                    <Link to="/category/suplementosNaturales" className="navLink">Suplementos Naturales</Link> 
                </li>
                <li className="navItem">
                    <Link to="/category/hogar" className="navLink">Hogar</Link> 
                </li>
                <li className="navItem">
                    <Link to="/category/refrigerados" className="navLink">Refrigerados</Link> 
                </li>
            </ul>

            
        </div>
    )
}

export default NavBar