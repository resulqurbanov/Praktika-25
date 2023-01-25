import React from "react";
import "./style.scss"

function Navbar() {
  return (
    <>
      <nav>
        <a href="#Home"><h1>Studio</h1></a>
        <ul>
            <li><a href="#Home">Home</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Portofilo">Portofilo</a></li>
            <li><a href="#Team">Team</a></li>
            <li><a href="#Contact">Contact</a></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
