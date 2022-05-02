import ProductOnSale from './ProductOnSale'
import ProductInfo from './ProductInfo'

//take the products array from App.js and convert to lsit of products
//return to Product.js
 const ProductsOnSale = ({ products }) => {
    return (
    
    <>     
        {
            products.map((product) => (  
              
            <ProductOnSale   
                key={product.id} product ={product} 
             />
         ))}
     </>
    )

}

export default ProductsOnSale
