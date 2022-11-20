import "./cardbutton.css";

function CardButton(props) {

return (
    <button
    onClick={props.onClick}
    className="btn"
    >
    {props.children}
    </button>
);
}

export default CardButton;
