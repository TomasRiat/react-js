import "./buttonAddFavs.css"
import {useState} from "react"

function ButtonAddFavs() {
    const [isFavorite, setIsFavorite] = useState(false)
    const handleFavorite = () => {
        setIsFavorite(!isFavorite)
    }



  return (
    <div className="containerFavico">
        
    </div>
  )
}

export default ButtonAddFavs