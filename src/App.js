import React, { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/LoginE";
import Production from "./screens/Production";
import Selling from "./screens/Selling";
import Purchase from "./screens/Purchase";
import Showpurchase from "./screens/Showpurchase";
import Showsellingdata from "./screens/ShowSellingData";
import Databses from "./screens/Databses";
import EditPurchaseDate from "./components/EditPurchaseData";
import { AuthProvider } from "./config/Auth";
import PrivateRoute from "./config/PrivateRoute";
import Serch from "./screens/SerchPurchase";
import Search from "./screens/SearchSelling";
import Sidebarnav from './screens/FinalHome'
import Register from './screens/RegisterE';
import EditDataPurchase from "./screens/EditDataPurchase";

import EditDataSelling from './screens/EditDataSelling';
function App() {
  // loginsetup
  return (
    <>
      {/* <Header/> */}
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <PrivateRoute path="/purchase" exact component={Purchase} />
            <PrivateRoute path="/production" exact component={Production} />
            <PrivateRoute path="/selling" exact component={Selling} />
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
            
            <PrivateRoute path="/editdataPurchase/:id" exact component={EditDataPurchase}/>
            <PrivateRoute path="/editdataSelling/:id" exact component={EditDataSelling}/>
            <PrivateRoute path="/serchPurchase" exact component={Serch} />
            <PrivateRoute path="/serchSelling" exact component={Search} />
            <PrivateRoute path="/register" exact component={Register}/>
            <PrivateRoute path="/" component={Sidebarnav}></PrivateRoute>

           
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
