import React from 'react';
import {motion} from 'framer-motion';

import logo from "../logo1.png";
import {
  Button,
  Navbar,
  Nav,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";
import "../styles/styles1.css";
const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-light bg-dark">
        <div>
          <img src={logo} width="50" height="50" alt="" loading="lazy" />
          <label class="fonttext">Gaytri Cotton indusries</label>
        </div>
        <div class="form-inline">
          <button class="btn btn-outline-success mr-sm-2 butdesign" type="submit " style={{'border-radius': 30}}>
            PRODUCTION
          </button>
          <button class="btn btn-success my-2 my-sm-0 but1" type="submit" style={{'border-radius': 30}}>
            SELLING
          </button>
        </div>
      </nav>
    </div>

  )
}

export default Header;