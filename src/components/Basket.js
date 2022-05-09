import React, { useContext } from "react";
import "./Basket.css";
//import ButtonAddToBasket from "./ButtonAddToBasket";
import ButtonRemoveFromBasket from "./ButtonRemoveFromBasket";
import { UserContext } from "./UserContext";
import { useState, useEffect } from "react";
import axios from "axios";
import { set } from "react-hook-form";

const Basket = () => {

  const { signedInUser, setSignedInUser } = useContext(UserContext);
  const [basket, setBasket] = useState([]); //Contains the users basket from db with id's and quantities of each product
  const [basketProducts, setBasketProducts] = useState([]); //Contains products fetched from db based on the product id's in the users basket

  const fetchItemsFromBasket = (basket) => {
    //reset the basket products
    setBasketProducts([]);
    //Loop over the new basket and map the products
    basket.products.map((x) => {
      axios.get(`http://localhost:3000/products/${x.id}`).then((response) => {
        setBasketProducts((basketProducts) => [
          ...basketProducts,
          response.data[0],
        ]);
      });
    });
  };

  //Used when an item is removed from basket in ButtonRemoveFromBasket Component
  const handleItemRemoved = (newBasket) => {
    //Set the basket state to the new basket
    setBasket(newBasket);

    //Set the basket products again
    fetchItemsFromBasket(newBasket);
  };

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
        //Update the basketk products
        fetchItemsFromBasket(response.data);
      });
  }, []);

  if (!signedInUser) {
    return <h2>You need to be signed in to view your basket</h2>;
  } else {
    let totalProductsInBasket = 0;
    //Check that basket has loaded, then calculate the total products as the sum of the quantity properties
    if (basket.products != undefined && basket.products.length != 0) {
      totalProductsInBasket = basket.products
        .map((x) => x.quantity)
        .reduce((prev, cur) => prev + cur);
    }

    return (
      <div>
        <h1>Basket</h1>
        {totalProductsMessage(totalProductsInBasket)}
        {basketProducts.map((x) => (
          <BasketProduct
            product={x}
            basket={basket}
            onChange={handleItemRemoved}
            key={x.id}
          ></BasketProduct>
        ))}
      </div>
    );
  }
};

const totalProductsMessage = (totalProductsInBasket) => {
  if(totalProductsInBasket == 0){
    return <h2>There are no products in the basket. <br></br>Products can be added from the 'Dark products' tab in the menu</h2>
  }
  else {
    return <h2>Total products in basket: {totalProductsInBasket} </h2>

  }
}

const BasketProduct = (props) => {
  //Find quantity of product ind basket
  let quantity = 0;
  if (props.basket.products.length != 0) {
    quantity = props.basket.products.find(
      (y) => y.id == props.product.id
    ).quantity;
  }



  return (
    <div className="basketProduct">
      <h2>{props.product.title}</h2>
      <img src={props.product.image}></img>
      <h3>Quantity: {quantity}</h3> 
      <h3>Price: {props.product.price}  ${props.product.currency}</h3> 
      <ButtonRemoveFromBasket
        prodid={props.product.id}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Basket;
