import ButtonAddToBasket from './ButtonAddToBasket.js'
import ButtonRemoveFromBasket from './ButtonRemoveFromBasket.js'

const ProductInfo = ({product}) => {


 const testMethod=()=>{
        //logs the id of product where 'add to basket' is clicked
        console.log("Show only one, hide others. "+ product.id)
        return(product.id)

    }
    
    const ProdInfoDiv =   
        <div className='product'>
           <h4> {product.title}</h4>
           <img className="image" src={product.image} className='cat' />           
        <ButtonAddToBasket productid = { product.id } />  <ButtonRemoveFromBasket productid = { product.id } />
        </div>



return (
<div>
       <button onClick={testMethod} style={{backgroundColor: "green"}}
       className='btn'> 
        Test
       </button>
       <div className='container'>
    <b>{product.id==testMethod() ? ProdInfoDiv : ""}</b>     
    </div>
    </div>
    )
}
export default ProductInfo

