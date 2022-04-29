import ButtonAddToBasket from './ButtonAddToBasket'
import ButtonRemoveFromBasket from './ButtonRemoveFromBasket'

    
 const Product = ({ product }) => {
    <div className='product'>
    <ButtonAddToBasket productid = { product.id } />  <ButtonRemoveFromBasket productid = { product.id } />
    </div>
}

export default Product
