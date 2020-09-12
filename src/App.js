import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";
import Login from "./components/Login";
import fire from "./config/fire";

function App() {
  // loginsetup

  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
     
      {/* <Header/> */}
      <Switch>
        <Route path="/base">
          <Header />
          <Base addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/toppings">
          <Header />
          <Toppings addTopping={addTopping} pizza={pizza} />
        </Route>
        <Route path="/order">
          <Header />
          <Order pizza={pizza} />
        </Route>
        <Route path="/home">
          <Home  />
        </Route>
        <Route path="/">
        <Login />
        </Route>
      </Switch>
    </>
  );
}

export default App;
