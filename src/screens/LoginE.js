import React, { useCallback, useContext } from "react";
import logo from "../logo1.png";
import Header from "../components/dashboardheader";
import '../styles/Login.css'
import { withRouter, Redirect } from "react-router";
import { Button } from "react-bootstrap";
import app from "../config/fire";
import { AuthContext } from "../config/Auth";
const Login = ({ history }) => {

  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }
    
  return (
    
    <div className="App">
      <Header />
      <div className={"authBox"}>
        <div className={"leftBox"}>
          <div className={"bgOrange"} />  
          <div className={"bgImage"} />
          <img src={logo} className={"bgImagelogo"} alt="Logo" />;
          <div className={"bgText bold style1"}>Welcome</div>
          <div className={"bgText style2"}> Gayatri Cotton</div>
        </div>
        <div className={"rightBox"}>
          <div className={"box"}>
            <div className={"titleAuth"}>Login</div>
            <form onSubmit={handleLogin}>
              <div className={"inputBox"}>
                <input
                  name="email"
                  className={"inputS"}
                  onFocus
                  autoComplete="off"
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
                Log in
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
