import ButtonAddToBasket from './ButtonAddToBasket.js'
import ButtonRemoveFromBasket from './ButtonRemoveFromBasket.js'
import ProductInfo from './ProductInfo'
    
 const Product = ({ product }) => {

    const imageClick = (productid) => {
        console.log('Click!!!! on product id: ' + productid);
    }  

//Create the ProductDiv with all relevant data to show
const ProdDiv =   
    <div className='product'>
       <h4> {product.title}</h4>
       <div className="img__wrap">
       <img className="image" src={product.image} className='cat' />
       <p className="img__description" onClick={() => imageClick(product.id)}>
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
