
 const ButtonAddToBasket = ({prodid}) => {

    const onAddToBasket=()=>{
        //logs the id of product where 'add to basket' is clicked
        console.log("ADDED TO BASKET product id: " + prodid)
    }

    return (
       <button onClick={onAddToBasket} style={{backgroundColor: "green"}}
       className='btn'> 
        Add To Basket
       </button>
    )
}

export default ButtonAddToBasket