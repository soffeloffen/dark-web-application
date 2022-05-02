import ButtonAddToBasket from './ButtonAddToBasket.js'
import ButtonRemoveFromBasket from './ButtonRemoveFromBasket.js'
import Slider from 'react-styled-carousel';
import ReactDOM from 'react-dom'
import ProductInfo from './ProductInfo'
import { useState } from 'react'


let clicked = false;
let prodid = 0;

const ProductOnSale = ({ product }) => {

const imageClick = (clickproductid) => {
     console.log('Click!!!! on product id: ' + clickproductid);
     clicked = true;
    let prodid = clickproductid
     console.log(clicked)
     console.log(prodid)
    }  

const goBack = () =>{
    clicked = false;
    prodid = 0;
    console.log(clicked)
    console.log(prodid)


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


const ProductInfo = 
<div className='product'> 
    <buttton onClick={() => goBack()}>goBack </buttton>
    <h1> {product.title} </h1>
    <ButtonAddToBasket productid = { product.id } />  <ButtonRemoveFromBasket productid = { product.id } />

</div>

    return (
        <div className='container'> 
        <b>{product.id == 2 ?  ProductInfo : ""}</b> <b>{product.onsale==true ?  ProdOnSaleDiv  : ""}</b> 
         </div>
    )
}


export default ProductOnSale
