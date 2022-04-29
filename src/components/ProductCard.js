import React from 'react'

export const ProductCard = () => {
    return (
       <>
       {products.map((product) => (
           <h3 key={product.id}>{product.longdescriptions} </h3>
       
       ))} 
       </>
    )
}

export default ProductCard