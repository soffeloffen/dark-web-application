import Product from './Product'

 const Products = ({ products }) => {
    return(
    <>
    {products.map((product) => (
        <Product 
        key={product.id}
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