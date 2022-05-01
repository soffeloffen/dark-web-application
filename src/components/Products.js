import Product from './Product'

//take the products array from App.js and convert to lsit of products
//return to Product.js
 const Products = ({ products }) => {
    return (
    <>     
        {
            products.map((product) => (      
            <Product 
                key ={product.id} product ={product}
             />
         ))}
     </>
    )
}

export default Products
