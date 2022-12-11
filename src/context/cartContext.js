import { createContext, useState } from "react";

// 1. Importamos e inicializamos el contexto con createContext(). (este elemento se importa para conexion)
export const cartContext = createContext();

// 2. Creamos nuestro Context Provider.
export function CartContextProvider(props){


    const [cart, setCart] = useState([])

    function addToCart(product, count){
        let itemAlreadyInCart = cart.findIndex(itemInCart => itemInCart.id === product.id);
        //copio con spread-operator el operator contenido de carrito para no modificar el estado
        let newCart = [...cart];

        if (itemAlreadyInCart !== -1){
            newCart[itemAlreadyInCart].count += count;
            setCart(newCart);
        }
        else{
        // agrego el count a product y pusheo en newCart
        product.count = count;
        newCart.push(product)
        setCart(newCart)
        }
    }

    function itemsInCart(){
        let total = 0
        cart.forEach((itemInCart) => (total = total + itemInCart.count));
        return total;
    }

    function removeItemCart(id){
        // usar cart.filter -> filtrar todos los items con un ID diferente a "removeId"
        cart.splice(
            cart.findIndex((p) => p.id === id),
            1
            );
            setCart([...cart]);
    }

    function clearCart(){
        setCart([]);
    }

    function priceInCart(){
        let totalPrice = 0
        cart.forEach((product) => (totalPrice = totalPrice + (product.price*product.count)))
        return totalPrice
    }

    // 3. Retornamos el Provider del context creado.
    return(

        <cartContext.Provider value= {{cart, addToCart, clearCart, removeItemCart, itemsInCart, priceInCart }} >
            {props.children}
        </cartContext.Provider>
    )
}
