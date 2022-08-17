import "./card.css";
const Card = (props) => {
    return (
        <div>
            <div className="card">
                <h2>{props.item.title}</h2>
                <p> {props.item.body}</p>
            </div>
        </div>
    );
};

export default Card;
