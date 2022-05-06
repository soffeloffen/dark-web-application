import axios from "axios";

 const ButtonRemoveFromBasket = ({prodid}) => {

    const onRemoveFromBasket=()=>{
        //logs the id of product where 'removed from basket' is clicked
        console.log("REMOVE FROM BASKET product id: " + prodid)

        const deleteBasket = async () => {
            const res = await fetch("http://localhost:3000/customers");
            const data = await res.json();
            const currentUserId = data[data.length - 1].id;
            console.log("Current User Id: " + currentUserId);
            axios.delete("http://localhost:3000/baskets", currentUserId).then((response) => {
              //Wait for the API to respond - statuscode should be 201 if everything went well
              console.log(response)
              if (response.status === 201) {
                console.log("item created");
              } else {
                console.log("Failed with error code + " + response.status);
              }
            });
          }
    }

    return (
       <button onClick={onRemoveFromBasket} style={{backgroundColor: "red"}}
       className='btn'> 
        Remove From Basket
       </button>
    )
}

export default ButtonRemoveFromBasket

//Buttons to put for each product. But Product doesn't work right now
//<ButtonAddToBasket productid = { product.id } />  <ButtonRemoveFromBasket productid = { product.id } />
