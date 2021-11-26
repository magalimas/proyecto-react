import "./ItemListContainer.css"
import React , {useEffect} from "react";
import ItemCount from '../../components/ItemCount/ItemCount';
import ItemList from "../../components/ItemList/ItemList";
import artemisa from '../../assets/images/artemisa.png';
import atenea from '../../assets/images/atenea.png';
import bombe from '../../assets/images/bombe.png';
import magnolia from '../../assets/images/magnolia.png';
import milan from '../../assets/images/milan.png';
import olinda from '../../assets/images/olinda.png';
import pandora from '../../assets/images/pandora.png';
import paraiso from '../../assets/images/paraiso.png';
import paris from '../../assets/images/paris.png';
import harmonia from '../../assets/images/harmonia.png';
import indiana from '../../assets/images/indiana.png';


function ItemListContainer (props) {

    const [products, setProducts] = React.useState([])

    const CandleProducts = [
        { id: 1, title: 'Vela Artemisa', img: artemisa, price: 1200, stock: 3},
        { id: 2, title: 'Vela Atenea', img: atenea, price: 1100, stock: 4},
        { id: 3, title: 'Vela Bombe', img: bombe, price: 1000, stock: 2},
        { id: 4, title: 'Vela Magnolia', img: magnolia, price: 2200, stock: 1},
        { id: 5, title: 'Vela Milan', img: milan, price: 1650, stock: 2},
        { id: 6, title: 'Vela Olinda', img: olinda, price: 1850, stock: 4},
        { id: 7, title: 'Vela Pandora', img: pandora, price: 440, stock: 2},
        { id: 8, title: 'Vela Paraiso', img: paraiso, price: 900, stock: 5},
        { id: 9, title: 'Vela Paris', img: paris, price: 720, stock: 3},
        { id: 10, title: 'Vela Harmonia', img: harmonia, price: 1275, stock: 2},
        { id: 11, title: 'Vela Indiana', img: indiana, price: 780, stock: 2},
      ]

    
//el reject
    // const promesa = new Promise((resolve) => {
    //     setTimeout(() => resolve(CandleProducts), 2000);
    //   });

    //   useEffect(() => {
    //     promesa.then(respuesta =>
    //       setProducts(respuesta))
    //   }, []);

    return (
        <div>
            <p className="greeting">{props.greeting}</p>
            <ItemCount initial={1} stock={15} />
            <ItemList products={products} />
        </div>
        
    )
}

export default ItemListContainer