import CartWidget from "./CartWidget"

function NavBar() {
    return (
        <div className="navContainer">
            <div className="navBar1">
                <h1 className="title"> <a href=".">Dietetica Nunchi</a></h1>
                <CartWidget/>
            </div>
            <ul className="navBar2">
                <li className="navItem">
                    <a href="." className="navLink">Alimentos Naturales</a> 
                </li>
                <li className="navItem">
                    <a href="." className="navLink">Despensa</a> 
                </li>
                <li className="navItem">
                    <a href="." className="navLink">Bebidas e Infusiones</a>
                </li>
                <li className="navItem">
                    <a href="." className="navLink">Cosmética & Cuidado de la Salud</a> 
                </li>
                <li className="navItem">
                    <a href="." className="navLink">Suplementos Naturales</a> 
                </li>
                <li className="navItem">
                    <a href="." className="navLink">Hogar</a> 
                </li>
                <li className="navItem">
                    <a href="." className="navLink">Refrigerados</a> 
                </li>
            </ul>

            
        </div>
    )
}

export default NavBar