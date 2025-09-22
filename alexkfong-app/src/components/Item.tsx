import { Link } from 'react-router';
import './Item.css';

function Item(props: any) {

    return (
        <Link to={`/projects/${props.id}`}>
        <div className="item">
            <div className="item-image">
                 <img src={props.image} alt={props.title} />
             </div>
                <div className="item-text">
                    <h4>{props.id}</h4>
                    <p>{props.description}</p>
                </div>
               
            
        </div>
        </Link>
    );
}
export default Item;