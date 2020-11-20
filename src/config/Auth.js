import React, { useEffect, useState } from "react";
import fire from "../config/fire";
import "../styles/Homestyles.css"
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    fire.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if(pending){
    return <><div className="loadingDiv"><h1 className="editLoading">Loading To Gayatri Cotton Industries...</h1></div></>
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};