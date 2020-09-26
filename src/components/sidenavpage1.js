import React from "react";
import { Nav } from "react-bootstrap";
import "../styles/styleNavBar.css";


const sidenavpage1=()=> {
    
const hamburger = document.querySelector('.hamburgar');
const navLinks = document.querySelector('.nav_links');
const links = document.querySelectorAll('nav_links li');

if(hamburger){
  hamburger.addEventListener('click' , ()=>{
      navLinks.classList.toggle('open');
    
  })
}
  return (
    <div>
      <Nav>
        <div className="hamburgar">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className="nav_links">
          <li>
            <a href="#">home</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Project</a>
          </li>
        </ul>
      </Nav>
  
    </div>
  );
}

export default sidenavpage1;
