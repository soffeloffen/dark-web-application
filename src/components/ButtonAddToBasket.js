import { useState, useEffect } from "react";
 const ButtonAddToBasket = ({prodid}) => {

    const onAddToBasket=()=>{
        //logs the id of product where 'add to basket' is clicked
        console.log("ADDED TO BASKET product id: " + prodid)
       
        useEffect(() => {
            // PUT request using fetch inside useEffect React hook
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
            };
            fetch('http://localhost:3000/baskets', requestOptions)
                .then(response => response.json())
                .then(data => setPostId(data.id));
        
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
        }, []);

    }

    return (
       <button onClick={onAddToBasket} style={{backgroundColor: "green"}}
       className='btn'> 
        Add To Basket
       </button>
    )
}

export default ButtonAddToBasket