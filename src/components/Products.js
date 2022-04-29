import Product from './Product'

 const Products = ({ products }) => {
    return(
    
    <>
    {products.map((product) => (
        <h3 key={product.id}>{product.title + ": "+ product.shortdescription}</h3>
        //<Product key={product.id} product={product} />
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