import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import Products from "./components/Products/Products";
import Admin from "./components/Admin area/Admin";
import "./App.css";

function App() {
  return (
    <div >
      <Navbar />
      <Switch>
        <Route path="/Category">
          <Category />
        </Route>
        <Route path="/Products">
          <Products />
        </Route>
        <Route path="/Admin">
          <Admin />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
