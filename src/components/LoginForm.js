import React from "react";
import "./LoginForm.css";
import axios from "axios";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Username: null,
      Password: null,
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  createBasket = (customerId) => {
    axios.post("http://localhost:3000/baskets", customerId).then((response) => {
      //Wait for the API to respond - statuscode should be 201 if everything went well
      if (response.status === 201) {
        console.log("Basket successfully created");
      } else {
        console.log("Failed with error code + " + response.status);
      }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const data = this.state;
    console.log(data);
    axios
      .post("http://localhost:3000/customers", data)
      .then((response) => {
        console.log(response);
        if (response.status === 201) {
          this.createBasket(response.data.id);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleUsernameChange(event) {
    this.setState({ Username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ Password: event.target.value });
  }

  render() {
    const { Username, Password } = this.state;
    return (
      <div className="LoginForm">
        {" "}
        LoginForm
        <form className="labels" onSubmit={this.handleSubmit}>
          <input
            type="text"
            required
            placeholder="Email"
            name="Username"
            className="labels"
            onChange={this.handleUsernameChange}
          ></input>
          <input
            type="text"
            required
            placeholder="Password"
            name="Password"
            className="labels"
            onChange={this.handlePasswordChange}
          ></input>
          <input type="submit" className="labels"></input>
        </form>
      </div>
    );
  }
}

export default LoginForm;
