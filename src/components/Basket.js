import React, { useContext } from "react";
import "./Basket.css";
import { UserContext } from "./UserContext";

const Basket = () => {

  const {signedInUser, setSignedInUser} = useContext(UserContext);
  
  return (
    <div>
      <h1 className="basket-title"> Your Basket </h1>
    </div>
  );
};

export default Basket;
