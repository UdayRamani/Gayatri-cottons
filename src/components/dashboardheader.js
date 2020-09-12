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

function dashboardheader() {
    return (
        <div>
      <nav class="navbar navbar-default">
        <div>
        </div>
        <div class="form-inline">
        <img src={logo} className={"navLogo"} width="50" height="50" alt="" loading="lazy" />
        </div>
      </nav>
    </div>
    )
}

export default dashboardheader
