import ButtonAddToBasket from './ButtonAddToBasket.js'
import ButtonRemoveFromBasket from './ButtonRemoveFromBasket.js'

    
 const Product = ({ product }) => {
  /*  const showProduct=() => {
        console.log(product.id)
    }*/

    return (
        <div>
            <p>{product.title}</p>
        <ButtonAddToBasket productid = { product.id } />  <ButtonRemoveFromBasket productid = { product.id } />

        </div>

    )
}

export default Product
