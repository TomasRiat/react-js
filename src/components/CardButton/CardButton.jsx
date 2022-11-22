import "./cardbutton.css";

function CardButton(props) {

return (
    <button
    onClick={props.onClick}
    className="btn"
    style={props.style}
    >
    {props.children}
    </button>
);
}

export default CardButton;
