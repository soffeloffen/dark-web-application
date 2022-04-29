import ButtonAddToBasket from './ButtonAddToBasket.js'
import ButtonRemoveFromBasket from './ButtonRemoveFromBasket.js'

    
 const Product = ({ product }) => {
    <div className='product'>
        <p>{product.title}</p>   
    <ButtonAddToBasket productid = { product.id } />  <ButtonRemoveFromBasket productid = { product.id } />
    </div>
}

export default Product
