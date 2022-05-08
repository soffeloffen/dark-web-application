import "./LoginForm.css";
import axios from "axios";
import { UserContext } from "./UserContext";
import React from "react";
import { useContext } from "react";
import { useState } from "react";

export const LoginForm2 = () => {
  const [Fullname, setFullname] = useState("");
  const [Email, setEmail] = useState("");
  const {signedInUser, setSignedInUser} = useContext(UserContext);

  const createBasket = (customerId) => {
    axios.post("http://localhost:3000/baskets", customerId).then((response) => {
      //Wait for the API to respond - statuscode should be 201 if everything went well
      console.log(response)
      if (response.status === 201) {
        console.log("Basket successfully created");
      } else {
        console.log("Failed with error code + " + response.status);
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {Fullname, Email}
    console.log(data);
    axios
      .post("http://localhost:3000/customers", data)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          updateSignedInUser(response.data);
          createBasket(response.data.id);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleFullnameChange = (event) => {
    setFullname(event.target.value);
  };

  const handleEmailChange = (event) => 
    setEmail(event.target.value);

   const updateSignedInUser = (user) => {
    console.log('setting new user to', user)
    setSignedInUser(user) 
    // alert(`${user.Fullname} signed in`)
   }

   if(signedInUser){
     return <h1>Signed in as {signedInUser.Fullname}</h1>
   }

  return (
    <div className="LoginForm">
      {" "}
      LoginForm
      <form className="labels" onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Full name"
          name="Fullname"
          className="labels"
          onChange={handleFullnameChange}
        ></input>
        <input
          type="text"
          required
          placeholder="Email"
          name="Email"
          className="labels"
          onChange={handleEmailChange}
        ></input>
        <input type="submit" className="labels"></input>
      </form>
    </div>
  );
};
