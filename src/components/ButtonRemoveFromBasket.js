import axios from "axios";
import { UserContext } from "./UserContext";
import { useContext } from "react";

const ButtonRemoveFromBasket = (props) => {
  const { signedInUser, setSignedInUser } = useContext(UserContext);

  //Used when the user clicks on the 'remove from basket' button
  const onRemoveFromBasket = (id) => {
    //Get basket of currently signed in user
    const currentUserId = signedInUser.id;
    axios
      .get(`http://localhost:3000/baskets/${currentUserId}`)
      .then((response) => {
        let basket = response.data;
        let productsInBasket = basket.products;
        let productToRemoveInBasket = productsInBasket.find((x) => x.id == id);

        //Modify basket
        if (productToRemoveInBasket.quantity == 1) {
          //Only 1 left in basket - Remove product from basket array.
          //Find index of product to remove
          const indexInArray = productsInBasket.indexOf(
            productToRemoveInBasket
          );

          //Use array.splice to remove product at the specified index
          productsInBasket.splice(indexInArray, 1);
        } else {
          //Decrease quantity of the product in basket
          productToRemoveInBasket.quantity -= 1;
        }

        axios
          .put(`http://localhost:3000/baskets/${currentUserId}`, basket)
          .then((response) => {
            if (response.status == 200) {
              //We've received our updated basket - call the onChange method to tell parent component to update
              props.onChange(response.data.newBasket);
            }
          });
      });
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
