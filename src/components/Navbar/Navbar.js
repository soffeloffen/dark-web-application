import React from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";

class Navbar extends React.Component {

  handleClick(){
    
  }
  

  state = { clicked: false };

   render() {
    return (
      <nav className="NavbarItems">
          <h1 className="Navbarlogo">Dark Web</h1>
        <div>
        </div>
        <ul className={this.state.clicked ? 'nav-menubar-active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index} id = {item.id}>
                <a className={item.cName}>
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

export default Navbar
 
