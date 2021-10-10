import React, { useState } from "react";
import "./App.css";
import Cart from "./components/cart/Cart";
import Navbar from "./components/navbar/Navbar";
import { AppContext, cartData } from "./store/appcontext";
import HomePage from "./views/HomePage";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

let shopItems = require("./mocks/products.json");

function App() {
  const [cartItems, saveCartItems] = useState<cartData[]>([]);
  const categories: string[] = [
    "Alcohol",
    "Bakery",
    "Dairy & eggs",
    "Drinks",
    "Frozen",
    "Home & Health",
    "Meat, Fish & Protein",
    "Pantry",
    "Pet Products",
    "Prepared",
    "Produce",
    "Snacks",
  ];

  return (
    <AppContext.Provider
      value={{
        shopItems,
        cartItems,
        saveCartItems: (data: cartData[]) => saveCartItems(data),
        categories,
      }}
    >
      <Router>
        <div className="App">
          <div className="main-content">
            <Switch>
              <Route path="/shop">
                <HomePage />
              </Route>
              <Route path="*">
                <div>
                  <Navbar />
                  <p style={{ textAlign: "center" }}>under construction</p>
                </div>
              </Route>
            </Switch>
          </div>
          <div className="cart-wrap">
            <Cart />
          </div>
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
