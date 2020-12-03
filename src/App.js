import React, { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Login from "./screens/LoginE";
import Production from "./screens/Production";
import SellingBelles from "./screens/Selling/SellingBelles";
import UserProfile from "./screens/UserProfile";
import PurchaseCotton from "./screens/Purchase/PurchaseCotton";
import EditDistributAmount from "./screens/Purchase/EditDistributAmount";
import Showpurchase from "./screens/Showpurchase";
import Showsellingdata from "./screens/ShowSellingData";
import Databses from "./screens/Databses";
import { AuthProvider } from "./config/Auth";
import PrivateRoute from "./config/PrivateRoute";
import Register from "./screens/RegisterE";
import EditDataPurchase from "./screens/EditDataPurchase";
import FinalHome from "./screens/FinalHome";
import EditDataSelling from "./screens/EditDataSelling";
function App() {
  // loginsetup
  return (
    <>
      {/* <Header/> */}
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <PrivateRoute
              path="/purchasecotton"
              exact
              component={PurchaseCotton}
            />

            <PrivateRoute
              path="/EditDistributAmount/:id"
              exact
              component={EditDistributAmount}
            />
            <PrivateRoute path="/production" exact component={Production} />

            <PrivateRoute path="/Selling" exact component={SellingBelles} />
            <PrivateRoute path="/UserProfile" exact component={UserProfile} />

            <PrivateRoute
              path="/showpurchasedata"
              exact
              component={Showpurchase}
            />
            <PrivateRoute
              path="/showsellingdata"
              exact
              component={Showsellingdata}
            />
            {/* <Route path="/testing" exact component={Testing}/> */}
            <PrivateRoute path="/databses" exact component={Databses} />

            <PrivateRoute
              path="/editdataPurchase/:id"
              exact
              component={EditDataPurchase}
            />
            <PrivateRoute
              path="/editdataSelling/:id"
              exact
              component={EditDataSelling}
            />
            <PrivateRoute path="/register" exact component={Register} />
            <PrivateRoute path="/" exact component={FinalHome} />
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
