import React, { useCallback, useState } from "react";
import { withRouter } from "react-router";
import logo from "../logo1.png";
import "../styles/styles1.css";
import { motion } from "framer-motion";
import app from "../config/fire";
import { db } from "../config/fire";
import Header from "../components/dashboardheader";
import { Button } from "react-bootstrap";
const RegisterE = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value)
          .then((cred) => {
            return db.collection("users").doc(cred.user.uid).set({
              email: email.value,
            });
          });
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );
  return (
    <div className="App">
      <Header />
      <div className={"authBox"}>
        <div className={"leftBox"}>
          <div className={"bgOrange"} />
          <div className={"bgImage"} />
          <motion.img src={logo} className={"bgImagelogo"} alt="Logo" />;
          <div className={"bgText bold style1"}>Welcome</div>
          <div className={"bgText style2"}> Gayatri Cottons</div>
        </div>
        <div className={"rightBox"}>
          <div className={"box"}>
            <div className={"titleAuth"}>Sign Up</div>
            <form onSubmit={handleSignUp}>
              <div className={"inputBox"}>
                <input
                  name="email"
                  className={"inputS"}
                  onFocus
                  required
                  type="email"
                  placeholder={"YOUR NAME...."}
                />
              </div>
              <div className={"inputBox"}>
                <input
                  name="password"
                  className={"inputS"}
                  type="password"
                  placeholder={"PASSWORD...."}
                />
              </div>
              <br />
              <br />
              <Button type="submit" variant="secondary" className={"btnAuth"}>
                Sign Up
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(RegisterE);
