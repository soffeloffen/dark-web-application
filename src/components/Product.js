import React from 'react'
import ButtonAddToBasket from './ButtonAddToBasket'
import ButtonRemoveFromBasket from './ButtonRemoveFromBasket'

       /* gives prod id to basket */
 const Product = ({ product }) => {
    return (
        <div >
            <h3>{ product.title }</h3>
     
            <ButtonAddToBasket productid = { product.id } />  <ButtonRemoveFromBasket productid = { product.id } />
            
        </div>
    )
}

export default Product
