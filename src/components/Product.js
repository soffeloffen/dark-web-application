import ButtonAddToBasket from './ButtonAddToBasket.js'
import ButtonRemoveFromBasket from './ButtonRemoveFromBasket.js'
    
 const Product = ({ product }) => {

//for each product, show title and short description
    return (
        <div className='product'>
        <h4> {product.title}</h4>
        <img src={product.image} className='cat' ></img>
        <p > {product.shortdescription}  </p>
        <ButtonAddToBasket productid = { product.id } />  <ButtonRemoveFromBasket productid = { product.id } />
        </div>
    )
}

export default Product
