import ButtonAddToBasket from './ButtonAddToBasket.js'
import ButtonRemoveFromBasket from './ButtonRemoveFromBasket.js'
import ProductInfo from './ProductInfo'
import { useState } from 'react'
    

 const Product = ({ product }) => {
    const [currentProdID, setCurrentProdID] = useState(0);
    

    const imageClick = (productid) => {
        console.log('Click!!!! on product id: ' + productid);
    }  

//Create the ProductDiv with all relevant data to show
const ProdDiv =   
    <div className='product'>
       <h4> {product.title}</h4>
       <div className="img__wrap">
       <img className="image" src={product.image} className='cat' />
       <p className="img__description" onClick={() => setCurrentProdID(product.id)}>
           {product.shortdescription} <br></br>
           <br></br>
           Click here to get more infomation about this product.</p>
       </div>
    <ButtonAddToBasket productid = { product.id } />  <ButtonRemoveFromBasket productid = { product.id } />
    </div>

    return (
        <div className='container'>
        <ProductInfo currentprodid = {currentProdID} prodid = {product.id}/>
         {ProdDiv}
        </div>
        
    )
}

export default Product
