

 const ButtonRemoveFromBasket = ({ productid }) => {

    const onRemoveFromBasket=()=>{
        //logs the id of product where 'removed from basket' is clicked
        console.log("REMOVE FROM BASKET product id: " + productid)
    }

    return (
       <button onClick={onRemoveFromBasket} style={{backgroundColor: "red"}}
       className='btn'> 
        Remove From Basket
       </button>
    )
}

export default ButtonRemoveFromBasket

//Buttons to put for each product. But Product doesn't work right now
//<ButtonAddToBasket productid = { product.id } />  <ButtonRemoveFromBasket productid = { product.id } />
