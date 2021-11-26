import React from 'react';
import { Item } from '../Item/Item';

export default function ItemList({products}) {
    return (
        <div>
            {products.map( (producto, index) => 
            <Item title={producto.title} imagen={producto.img} price={producto.price} key={index}/>
          )
        }  
        </div>
    )
}
