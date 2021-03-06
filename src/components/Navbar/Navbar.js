import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="Navbarlogo">Dark Web</h1>
        <img className="img" src={"/images/hacker.png"} />
        <ul className="nav-menu">
          {MenuItems.map((item, index) => {
            return (
              <Link to={item.url} key={index} className={item.cName}>
                <li
                  key={index}
                  id={item.id}
                  onClick={() => this.handleClick(item.id)}
                >
                  {item.title}
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
