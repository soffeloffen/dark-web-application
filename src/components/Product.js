import ButtonAddToBasket from './ButtonAddToBasket.js'
import ButtonRemoveFromBasket from './ButtonRemoveFromBasket.js'
    
 const Product = ({ product }) => {

//Create the ProductDiv with all relevant data to show
const ProdDiv =   
    <div className='product'>
       <h4> {product.title}</h4>
       <div class="img__wrap">
       <img class="img__img" src={product.image} className='cat' ></img>
       <p class="img__description">
           {product.shortdescription} <br></br>
           <br></br>
           Click here to get more infomation about this product.</p>
       </div>
    <ButtonAddToBasket productid = { product.id } />  <ButtonRemoveFromBasket productid = { product.id } />
    </div>

    return (
        <div className='container'>
         {ProdDiv}
        </div>
    )
}

export default Product
