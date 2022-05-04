import ButtonAddToBasket from './ButtonAddToBasket.js'
import ButtonRemoveFromBasket from './ButtonRemoveFromBasket.js'
import Slider from 'react-styled-carousel';
import ReactDOM from 'react-dom'
import { useState } from 'react'

const ProductOnSale = ({ product }) => {
const [currentProdID, setCurrentProdID] = useState(0);


 const ProdOnSaleDiv =  
    <div className='product'> 
       <h4> {product.title}</h4>
       <div className="img__wrap">
       <img className="image" src={product.image} className='cat' />
       <p className="img__description" onClick={() => setCurrentProdID(product.id)  }>
           {product.shortdescription} <br></br>
           <br></br>
           Click here to get more infomation about this product.
           </p>
       </div> 
       </div> 


const ProductInfo = 
<div className='product'> 
    <buttton onClick={() => setCurrentProdID(0)}>goBack </buttton>
    <h1> {product.title} </h1>
    <img className="image2" src={product.image}/>
     <h3>The price of this product  {product.price} {product.currency} </h3>
     <p> 
         {product.longdescription} </p>
    <ButtonAddToBasket productid = { product.id } />  <ButtonRemoveFromBasket productid = { product.id } />
</div> 

return (
    <div className='container'>
    <b>{product.onsale==true && currentProdID==0 ?  
    ProdOnSaleDiv : product.id == currentProdID && currentProdID !=0 ? ProductInfo : "" }</b>     
    </div>
    )
}

export default ProductOnSale
