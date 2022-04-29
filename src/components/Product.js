import ButtonAddToBasket from './ButtonAddToBasket'
import ButtonRemoveFromBasket from './ButtonRemoveFromBasket'

    
 const Product = ({ product }) => {
    <div className='product'>
        <h3>hey</h3>
    <ButtonAddToBasket productid = { product.id } />  <ButtonRemoveFromBasket productid = { product.id } />
    </div>
}
export default Product
