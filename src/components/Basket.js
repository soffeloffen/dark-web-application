import React, { useContext } from "react";
import "./Basket.css";
import { UserContext } from "./UserContext";

export const Basket = () => {
    const {value} = useContext(UserContext)

  return (
    <div>
        <h1 className="basket-title"> Your Basket </h1>
        <h1>{value}</h1> 
    </div>
  )
}

export default Basket;
