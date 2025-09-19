

function Item(props:any) {

    return (
        <div className="item">
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <img src={props.image} alt={props.title} />
            
        </div>
    );
}
export default Item;