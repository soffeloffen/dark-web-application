import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css" 

class Navbar extends React.Component {
  render() {
    return (
      <nav className="NavbarItems">
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.ur}>
                    {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
