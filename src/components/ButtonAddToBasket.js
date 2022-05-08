import { useState, useEffect } from "react";
import axios from "axios";
import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const ButtonAddToBasket = ({ product }) => {
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const onAddToBasket = () => {

    if(!signedInUser){
      alert('you need to be signed in before adding to basket')
      return;
    }
    const currentUserId = signedInUser.id;
    
    //Get current basket for user
    axios
      .get(`http://localhost:3000/baskets/${currentUserId}`)
      .then((response) => {
        var currentBasket = response.data;
        if (
          currentBasket.products.filter((x) => x.id == product.id).length != 0
        ) {
          var productInBasket = currentBasket.products.find(
            (x) => x.id == product.id
          );
          productInBasket.quantity += 1;
        } else {
          currentBasket.products.push({ id: product.id, quantity: 1 });
        }

        axios
          .put(`http://localhost:3000/baskets/${currentUserId}`, currentBasket)
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              alert(`${product.title} added to basket`)
            } else {
              console.log("Failed with error code + " + response.status);
            }
          });
      });

  };
  return (
    <button
      onClick={onAddToBasket}
      style={{ backgroundColor: "green" }}
      className="btn"
    >
      Add To Basket
    </button>
  );
};

export default ButtonAddToBasket;
