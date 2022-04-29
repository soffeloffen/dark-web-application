import ButtonAddToBasket from './ButtonAddToBasket.js'
import ButtonRemoveFromBasket from './ButtonRemoveFromBasket.js'

    
 const Product = ({ product }) => {
  /*  const showProduct=() => {
        console.log(product.id)
    }*/

    return (
        <div>
        <h4> hey from Product.js</h4>
        <h1>{product.key}</h1>
        </div>

    )
}

export default Product
