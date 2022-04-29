import Product from './Product.js'

 const Products = ({ products }) => {

    return (
<>     
{products.map((product) => (
    <Product
        
       // title={product.title}
      />
    ))}
     </>
    )
}

export default Products

    /* <div className='product'>
            <h1>
                {product.title}
            </h1>
            <p>
                {product.longdescription}
            </p>
        </div> */