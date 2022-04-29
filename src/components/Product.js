import ButtonAddToBasket from './ButtonAddToBasket'
import ButtonRemoveFromBasket from './ButtonRemoveFromBasket'

    
 const Product = ({ product }) => {
    const showProduct=() => {
        console.log(product.id)
    }
    return (
        <div>
        <h4> hey from Product.js</h4>
        <button onClick={showProduct}> </button>

        <ButtonAddToBasket productid = { product.id } />  <ButtonRemoveFromBasket productid = { product.id } />
        </div>

    )
}

export default Product
