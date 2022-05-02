import ButtonAddToBasket from './ButtonAddToBasket.js'
import ButtonRemoveFromBasket from './ButtonRemoveFromBasket.js'
import Slider from 'react-styled-carousel';
import ReactDOM from 'react-dom'

const title =     <h1> j</h1>
 const ProductOnSale = ({ product }) => {


 const ProdOnSaleDiv =   
    <div className='product'> 
       <h4> {product.title}</h4>
       <div class="img__wrap">
       <img class="img__img" src={product.image} className='cat' ></img>
       <p class="img__description">
           {product.shortdescription} <br></br>
           <br></br>
           Click here to get more infomation about this product.</p>
       </div>
    </div>

    return (
        <div className='container'> 
        <b>{product.onsale==true ?  ProdOnSaleDiv  : ""}</b>
        </div>
    )
}


export default ProductOnSale
