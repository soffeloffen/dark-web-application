import ProductOnSale from './ProductOnSale'
import ProductInfo from './ProductInfo'
import { useState } from 'react'

//take the products array from App.js and convert to lsit of products
//return to Product.js
 const ProductsOnSale = ({ products }) => {


    return (
    <>     
    <h1>js</h1>
          <ProductOnSale show={this.state.show} />
        {
            products.map((product) => (  
            <ProductOnSale   
                key={product.id} product ={product} />
         ))}
     </>
     
    )

}

export default ProductsOnSale
