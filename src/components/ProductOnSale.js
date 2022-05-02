import ButtonAddToBasket from './ButtonAddToBasket.js'
import ButtonRemoveFromBasket from './ButtonRemoveFromBasket.js'
import Slider from 'react-styled-carousel';
import ReactDOM from 'react-dom'
import ProductInfo from './ProductInfo'


const ProductOnSale = ({ product }) => {

const imageClick = (clickproductid) => {
     console.log('Click!!!! on product id: ' + clickproductid);

    }  

 const ProdOnSaleDiv =   
    <div className='product'> 
       <h4> {product.title}</h4>
       <div className="img__wrap">
       <img className="image" src={product.image} className='cat' />
       <p className="img__description" onClick={() => imageClick(product.id)}>
           {product.shortdescription} <br></br>
           <br></br>
           Click here to get more infomation about this product.
           </p>
       </div>
    </div>

    return (
        <div className='container'> 
        <b>{product.onsale==true ?  ProdOnSaleDiv  : ""}</b>
        </div>
    )
}


export default ProductOnSale
