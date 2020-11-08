import React from "react";
import logo from "../logo1.png";
import fire from "../config/fire";
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
          <img
            src={logo}
            className={"navLogo"}
            width="50"
            height="50"
            alt=""
            loading="lazy"
          />
        </div>
        <div class="form-inline">

        </div>
      </nav>
    </div>
  );
}

export default dashboardheader;
