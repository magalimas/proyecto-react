import React, {useState} from 'react';
import './ItemCount.css';
import CandleBombe from '../assets/images/CandleBombe.png';

const ItemCount = ({initial, stock, onAdd}) => {
    const [counter, setCounter] = useState (initial);

    const addition = () => {
        setCounter(counter + 1);
        if (counter >= stock ) {
            setCounter(counter == 0 );
        }
    };
    const subtraction = () => {
        setCounter(counter - 1);
        if (counter <= 0) {
            alert('Numero incorrecto');
        }
    };

    return (  
        <div className='containerItemCount'>
            <img src={CandleBombe} alt='vela bombe' className='candleBombe'/>
            <button onClick={subtraction}>-</button>
            <span>{counter}</span>
            <button onClick={addition}>+</button>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
};

export default ItemCount;