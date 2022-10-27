import Item from "./Item"

function ItemListContainer(props) {
    return (
        <div>
            <h1>{props.greeting}</h1>


            <Item/>
        </div>
    )
}

export default ItemListContainer