import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import LoginForm from "../LoginForm";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class Navbar extends React.Component {
  state = { clicked: "0" };

  handleClick(id) {
    this.setState({
      clicked: id,
    });

    switch (this.state.clicked) {
      case "1":
        console.log("hej");
      case "2":
        <h1>HEJSA</h1>;
        console.log(this.state);
      case "3":
      // render the form for paypal payment
      case "4":
      // render the form for paypal payment

      default:
        return null;
    }
  }

  

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="Navbarlogo">Dark Web</h1>
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <Link to={item.url}>
                <li
                  key={index}
                  id={item.id}
                  onClick={() => this.handleClick(item.id)}
                >
                  <a className={item.cName}>{item.title}</a>
                </li>
              </Link>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
