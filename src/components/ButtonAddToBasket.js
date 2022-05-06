import { useState, useEffect } from "react";
import axios from "axios";
import React, { useContext } from "react";
import { UserContext } from "./UserContext";



 const ButtonAddToBasket = ({product}) => {
    const onAddToBasket=()=>{
          //fetch customers
    const getBasket = async () => {
    const res = await fetch("http://localhost:3000/customers");
    const data = await res.json();
    const currentUserId = data[data.length - 1].id;

    console.log("Current User Id: " + currentUserId );

        //logs the id of product where 'add to basket' is clicked
        console.log("ADDED TO BASKET product: " + product.title)
        
            const productObj = product.id;
            axios.post(`http://localhost:3000/baskets/${currentUserId}/products/${productObj}`).then((response) => {
              //Wait for the API to respond - statuscode should be 201 if everything went well
              console.log(response)
              if (response.status === 201) {
                console.log("add to basket");
              } else {
                console.log("Failed with error code + " + response.status);
              }
            });
          };
     getBasket();

}

return (
    <button onClick={onAddToBasket} style={{backgroundColor: "green"}}
    className='btn'> 
     Add To Basket
    </button>
 )
}

export default ButtonAddToBasket