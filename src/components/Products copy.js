import Product from './Product'

//COPY FOR BACKUP
 const Products = ({ products }) => {

    return (
    <>     
    <h1>All Products</h1>

        {
            products.map((product) => (      
            <Product 
                key={product.id} product ={product} 
             />
         ))}
     </>
    )

}

export default Products
