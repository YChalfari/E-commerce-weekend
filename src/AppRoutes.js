import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Category from "./components/Category/Category";
import CategoryDetails from "./components/categoryDetails/CategoryDetails";
import Param from "./components/categoryDetails/Param";

class App extends Component {
  state = {
    cartItems: [],
    cartQuantity: 0,
  };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home myState={this.state.myState} />} />

            <Route path="/category" element={<Category />} />
            <Route path="/category/:city" element={<Param />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
