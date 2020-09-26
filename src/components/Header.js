import React from "react";
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
import {
  BagFill,
  BarChartFill,
  CameraVideoFill,
  CartFill,
  House,
} from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <div>
      <nav class="navbar navbar-default ">
        <div>
          <img src={logo} width="50" height="50" alt="" loading="lazy" />
          <label class="fonttext">Gaytri Cotton indusries</label>
        </div>
       
        <div class="form-inline">
          
          <div className="header_middle">
            
            <div className="header_option">
              <Link to="/">
              <House color="white" fontSize="30px" />
              </Link>
            </div>
            <div className="header_option">
              <Link to="/purchase">
              <CartFill color="white" fontSize="30px" />
              </Link>
            </div>
            <div className="header_option">
              <Link to="/production">
              <BarChartFill color="white" fontSize="30px" />
              </Link>
            </div>
            <div className="header_option">
              <Link to ="/selling">
              <BagFill color="white" fontSize="30px" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
