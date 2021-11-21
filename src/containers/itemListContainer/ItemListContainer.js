import "./ItemListContainer.css"
import ItemCount from '../../components/ItemCount';

function ItemListContainer (props) {
    return (
        <div>
            <p className="greeting">{props.greeting}</p>
            <ItemCount initial={1} stock={15} />
        </div>
        
    )
}

export default ItemListContainer