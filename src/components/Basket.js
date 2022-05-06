import React, { useContext } from "react";
import "./Basket.css";
import ButtonRemoveFromBasket from './ButtonRemoveFromBasket'
import { UserContext } from "./UserContext";
import axios from "axios";
import { useState, useEffect } from "react";

const Basket = () => {
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const [basket, setBasket] = useState([]);

  //fetch customers
  const getBasket = async () => {
    const res = await fetch("http://localhost:3000/customers");
    const data = await res.json();
    const currentUserId = data[data.length - 1].id;
    console.log("Current User Id: " + currentUserId);

    fetch("http://localhost:3000/baskets/" + currentUserId).then((response) => {
      response.json().then((data) => {
        console.log("Basket for current user: ");
        console.log(data);
        setBasket(data.products);
        const temp = JSON.stringify([data.products])
        console.log("basket items: " + temp )
      });
    });
  };
  useEffect(() => {
    const getCustomers = async () => {
      const basketFromServer = await getBasket();
    };
    getCustomers();
  }, []);

  //ALL PRODUCTS CONTAINER
const AllProducts = basket.map((product) => {
  return (
      <div  key={product.id}>
        <img className="image" src={product.image} />
        <h3>{product.title}</h3>
        <p>{product.price}   {product.currency} </p>
        <ButtonRemoveFromBasket prodid = {product.id} />
      </div>
);
});
//ALL PRODUCTS CONTAINER



  return (
    <div>
      <h1 className="basket-title"> Welcome to your basket {signedInUser} </h1>
    {AllProducts}

    </div>
  );
};

export default Basket;
