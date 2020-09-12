import React, { Component } from "react";
import logo from "../logo1.png";
import "../styles/styles1.css";
import { Link } from "react-router-dom";
import Home from "../components/Home";
import Header from "./dashboardheader";

function login(props) {
  
  return (
    <div className="App">
      <Header />

      <div className={"authBox"}>
        <div className={"leftBox"}>
          <div className={"bgOrange"} />
          <div className={"bgImage"} />
          <img src={logo} className={"bgImagelogo"} alt="Logo" />;
          <div className={"bgText bold style1"}>Welcome</div>
          <div className={"bgText style2"}>Gaytri Cottons</div>
        </div>
        <div className={"rightBox"}>
          <div className={"box"}>
            <div className={"titleAuth"}>Login</div>
            <div className={"inputBox"}>
              <input
                className={"inputS"}
                type={"text"}
                onFocus
                required
                placeholder={"YOUR NAME...."}
               
              />
             
            </div>
            <div className={"inputBox"}>
              <input
                className={"inputS"}
                type={"password"}
                placeholder={"PASSWORD...."}
              
              />
            </div>
            <div className={"contentBox"}></div>
            <Link to="/home">
              <div className={"btnAuth"} >Login</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default login;
