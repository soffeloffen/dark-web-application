import axios from "axios";
import { UserContext } from "./UserContext";
import { useContext } from "react";

const ButtonRemoveFromBasket = (props) => {
  //"baskets/:id/products/:prodId"

  const { signedInUser, setSignedInUser } = useContext(UserContext);

  const onRemoveFromBasket = (id) => {
    //logs the id of product where 'removed from basket' is clicked
    console.log("REMOVE FROM BASKET product id: " + id);

    //Get basket
    const currentUserId = signedInUser.id;
    axios
      .get(`http://localhost:3000/baskets/${currentUserId}`)
      .then((response) => {
        let basket = response.data;
        console.log("received basket", basket);
        let productsInBasket = basket.products;
        let productToRemoveInBasket = productsInBasket.find((x) => x.id == id);

        //Modify basket
        if (productToRemoveInBasket.quantity == 1) {
          //Remove product from array
          const indexInArray = productsInBasket.indexOf(
            productToRemoveInBasket
          );

          //Remove at the specified index and delete only 1
          productsInBasket.splice(indexInArray, 1);
        } else {
          //Decrease quantity
          productToRemoveInBasket.quantity -= 1;
        }

        axios.put(`http://localhost:3000/baskets/${currentUserId}`, basket).then((response) => {
          if(response.status == 200){
            console.log(response.data, 'response from put')
            props.onChange(response.data.newBasket)
          }
        })
      });

    //Update basket
  };

  return (
    <button
      onClick={() => onRemoveFromBasket(props.prodid)}
      style={{ backgroundColor: "red" }}
      className="btn"
    >
      Remove From Basket
    </button>
  );
};

export default ButtonRemoveFromBasket;
