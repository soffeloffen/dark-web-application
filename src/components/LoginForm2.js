import "./LoginForm.css";
import axios from "axios";
import { UserContext } from "./UserContext";
// import { React } from "react";
import React from "react";
import { useContext } from "react";
import { useState } from "react";

export const LoginForm2 = () => {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const {signedInUser, setSignedInUser} = useContext(UserContext);

  const [state, setState] = useState({
    Username: "",
    Password: ""
  })

  const createBasket = (customerId) => {
    axios.post("http://localhost:3000/baskets", customerId).then((response) => {
      //Wait for the API to respond - statuscode should be 201 if everything went well
      if (response.status === 201) {
        console.log("Basket successfully created");
      } else {
        console.log("Failed with error code + " + response.status);
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {Username, Password}
    console.log(data);
    axios
      .post("http://localhost:3000/customers", data)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          updateUsername();
          createBasket(response.data.id);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => 
    setPassword(event.target.value);

   const updateUsername = () => {
    setSignedInUser(Username) 
   }

  return (
    <div className="LoginForm">
      {" "}
      LoginForm
      <form className="labels" onSubmit={handleSubmit}>
        <input
          type="text"
          required
          placeholder="Email"
          name="Username"
          className="labels"
          onChange={handleUsernameChange}
        ></input>
        <input
          type="text"
          required
          placeholder="Password"
          name="Password"
          className="labels"
          onChange={handlePasswordChange}
        ></input>
        <input type="submit" className="labels"></input>
      </form>
    </div>
  );
};
