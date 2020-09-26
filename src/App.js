import React, { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/LoginE";
import Production from "./screens/production";
import Selling from "./screens/Selling";
import Purchase from "./screens/Purchase";
import Showpurchase from "./screens/Showpurchase";


import { AuthProvider } from "./config/Auth";
import PrivateRoute from "./config/PrivateRoute";


function App() {
  // loginsetup
  return (
    <>
      {/* <Header/> */}
      <Router>
        <Switch>
          <Route path="/purchase" exact component={Purchase} />
          <Route path="/production" exact component={Production} />
          <Route path="/selling" exact component={Selling} />
          <Route path="/showpurchase" exact component={Showpurchase} />
          <AuthProvider>
            <PrivateRoute path="/" component={Home}></PrivateRoute>
            <Route path="/login" component={Login}></Route>
          </AuthProvider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
