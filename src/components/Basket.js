import React, { useContext } from "react";
import "./Basket.css";
import ButtonRemoveFromBasket from "./ButtonRemoveFromBasket";
import { UserContext } from "./UserContext";
import { useState, useEffect } from "react";
import axios from "axios";

const Basket = () => {
  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const [basket, setBasket] = useState([]); //Contains the users basket from db
  const [basketProducts, setBasketProducts] = useState([]); //Contains products fetched from db based on the product id's in the users basket

  const handleChange = (newBasket) => {
    console.log('handling change with new basket', newBasket)
    setBasket(newBasket)
    handleBasketChange(newBasket)
  }



  const handleBasketChange = (newBasket) => {
    //reset the basket products
    setBasketProducts([])
    //Loop over the new basket and map the products 
      newBasket.products.map(x => {
        axios
          .get(`http://localhost:3000/products/${x.id}`)
          .then((response) => {
            setBasketProducts((basketProducts) => [...basketProducts, response.data[0]])
          });
      });

    

  }

  useEffect(() => {
    //Avoid fetching data if there is not a signed in user
    if (!signedInUser) {
      return;
    }
    //Fetch the users basket
    axios
      .get(`http://localhost:3000/baskets/${signedInUser.id}`)
      .then((response) => {
        //Update basket state
        setBasket(response.data);

        //For each product in the basket we fetch the product with all the product details
        //from the products endpoint and add it to the basket products state
        response.data.products.map((x) => {
          axios
            .get(`http://localhost:3000/products/${x.id}`)
            .then((response) => {
              setBasketProducts((basketProducts) => [...basketProducts, response.data[0]])
            });
        });
      });
  }, []);

  if(!signedInUser){
    return <h2>You need to be signed in to view your basket</h2>
  }
  else {
    let totalProductsInBasket = 0;
    //Check that basket has loaded, then calculate the total products as the sum of the quantity properties
    if(basket.products != undefined && basket.products.length != 0){
      totalProductsInBasket = basket.products.map(x => x.quantity).reduce((prev, cur) => prev + cur)
    }
    
    return (
      <div> 
        <h1>I am a basket</h1>
        <h2>Total products in basket: {totalProductsInBasket}</h2>
        {basketProducts.map((x) => ( 
           <BasketProduct product={x} basket={basket} onChange={handleChange} key={x.id}></BasketProduct>
        ))}
      </div>
    );
  }
};

const BasketProduct = (props) => {
  //Find quantity of product ind basket
  let quantity = 0;
  if(props.basket.products.length != 0){

    quantity = props.basket.products.find(y => y.id == props.product.id).quantity;
  }
  
  return (
    <div className="basketProduct">
      <h2>{props.product.title}</h2>
      <img src={props.product.image}></img>
      <h3>Quantity: {quantity}</h3>
      <ButtonRemoveFromBasket prodid = {props.product.id} onChange={props.onChange} />
    </div>
  );
};

export default Basket;
