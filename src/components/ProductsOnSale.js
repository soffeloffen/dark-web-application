import ProductOnSale from './ProductOnSale'
import ProductInfo from './ProductInfo'
import { useState } from 'react'

//take the products array from App.js and convert to lsit of products
//return to Product.js
 const ProductsOnSale = ({ products }) => {
const [testOne, setTestOne] = useState(false);


    return (
    
    <>     
        {
            products.map((product) => (  
            <ProductOnSale   
                key={product.id} product ={product} testOne = {testOne}/>
         ))}
     </>
     
    )

}

export default ProductsOnSale
