import React from 'react'

export const Item = ({title, img, price}) => {
    return (
        <div>
            <img src={img} alt="productos" />
            <h2>{title}</h2>
            <h3>{price}</h3>
            
        </div>
    )
}
