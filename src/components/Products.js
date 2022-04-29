import Product from './Product.js'

 const Products = ({ products }) => {

    return (
<>      <h4> hey from Products.js { products.id }  </h4>


    {products.map((product) => (
      <Product 
      key = {product.id}
      product = {product}
      producttitle = {product.title} 
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