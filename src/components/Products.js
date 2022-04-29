import Product from './Product'

 const Products = ({ products }) => {

    return (
<>     
{products.map((product) => (
    <Product
        product={product}
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