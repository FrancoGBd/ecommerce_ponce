/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./NavBar.css";
import logo from "../imgs/logoEcommerce.png";


const NavBar = () => {
  return (
    <div>
      <header class="navBar">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <h1>Nombre de Ecommerce</h1>
        </div>
        <nav class="nav-main">
          <ul class="nav-menu">
            <li>
              <a href="#">Link 1</a>
            </li>
            <li>
              <a href="#">Link 2</a>
            </li>
            <li>
              <a href="#">Link 3</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
