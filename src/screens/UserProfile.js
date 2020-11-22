import React, { useEffect, useState } from "react";
// import { db } from "../../config/fire";
import fire, { db } from "../config/fire";

import Header from "../components/dashboardheader";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
function UserProfile() {
  const [CurrentUser, setCurrentUser] = useState("");
  const [Allusers, setAllusers] = useState([]);
  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setCurrentUser(user.email);
    });
  }, []);
  useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      setAllusers(
        snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
      )
    );
  }, []);
  return (
    <div>
      <Header />

      <div className="containerr">
        <div className="CurrentUSer">
          <div className="headingofcurrunttext">
            <lable>CurrentUser</lable>
          </div>
          <AccountCircleIcon
            style={{
              fontSize: 300,
              color: "#000",
            }}
            className="userTexticon"
            data-tip
            data-for="registerTip3"
          />
          <div className="CurrntUSerText">
            <lable className="lableProfileEmail">{CurrentUser}</lable>
          </div>
        </div>
        <div className="ALlUSerBox">
          <div className="headingofcurrunttext">
            <lable>All Users</lable>
          </div>
          <div className="AlluserText">
            {Allusers.map((allusers) => (
              <div className="alluserText">{allusers.data.email}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
