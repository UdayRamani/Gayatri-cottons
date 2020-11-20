import React, { useState, useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/LoginE";
import Production from "./screens/Production";
import SellingCotton from "./screens/Selling/SellingCotton";
import SellingBelles from "./screens/Selling/SellingBelles";
import SellingOil from "./screens/Selling/SellingOil";
import SellingWastage from "./screens/Selling/SellingWastage";
import SellingSeed from "./screens/Selling/SellingSeed";
import SellingKhol from "./screens/Selling/SellingKhol";

import PurchaseCotton from "./screens/Purchase/PurchaseCotton";
import PurchaseSeed from "./screens/Purchase/PurchaseSeed";
import PurchaseBelles from "./screens/Purchase/PurchaseBelles";
import PurchaseOil from "./screens/Purchase/PurchaseOil";
import PurchaseWastage from "./screens/Purchase/PurchaseWastage";
import PurchaseKhol from "./screens/Purchase/PurchaseKhol";
import EditDistributAmount from "./screens/Purchase/EditDistributAmount";
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
            <PrivateRoute path="/purchasecotton" exact component={PurchaseCotton} />
            <PrivateRoute path="/Purchaseseed" exact component={PurchaseSeed} />
            <PrivateRoute path="/PurchaseBelles" exact component={PurchaseBelles} />
            <PrivateRoute path="/PurchaseOil" exact component={PurchaseOil} />
            <PrivateRoute path="/PurchaseWastage" exact component={PurchaseWastage} />
            <PrivateRoute path="/PurchaseKhol" exact component={PurchaseKhol} />
           
            <PrivateRoute path="/EditDistributAmount/:id" exact component={EditDistributAmount}/>
            <PrivateRoute path="/production" exact component={Production} />
            
            <PrivateRoute path="/SellingCotton" exact component={SellingCotton} />
            <PrivateRoute path="/SellingBelles" exact component={SellingBelles} />
            <PrivateRoute path="/SellingOil" exact component={SellingOil} />
            <PrivateRoute path="/SellingWastage" exact component={SellingWastage} />
            <PrivateRoute path="/SellingSeed" exact component={SellingSeed} />
            <PrivateRoute path="/SellingKhol" exact component={SellingKhol} />

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
