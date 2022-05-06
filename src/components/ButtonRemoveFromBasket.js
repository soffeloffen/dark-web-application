import axios from "axios";

const ButtonRemoveFromBasket = ({ prodid }) => {
  //"baskets/:id/products/:prodId"

  const onRemoveFromBasket = () => {
    //logs the id of product where 'removed from basket' is clicked
    console.log("REMOVE FROM BASKET product id: " + prodid);

    const deleteBasket = async () => {
      const res = await fetch("http://localhost:3000/customers");
      const data = await res.json();
      const currentUserId = data[data.length - 1].id;
      console.log("Current User Id: " + currentUserId);

      fetch("http://localhost:3000/baskets/" + currentUserId).then(
        (response) => {
          response.json().then((data) => {
            console.log("Basket for current user: ");
            console.log(data);
            const temp = JSON.stringify([data.products]);
            console.log("basket items: " + temp);
          });
        }
      );

      axios.delete("http://localhost:3000/baskets/"+currentUserId+"/products/"+prodid).then((response) => {
        //Wait for the API to respond - statuscode should be 201 if everything went well
        console.log(response)
        if (response.status === 201) {
          console.log("Basket successfully created");
        } else {
          console.log("Failed with error code + " + response.status);
        }
      });

    };
    deleteBasket();
  };

  return (
    <button
      onClick={onRemoveFromBasket}
      style={{ backgroundColor: "red" }}
      className="btn"
    >
      Remove From Basket
    </button>
  );
};

export default ButtonRemoveFromBasket;

//Buttons to put for each product. But Product doesn't work right now
//<ButtonAddToBasket productid = { product.id } />  <ButtonRemoveFromBasket productid = { product.id } />
