import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav/Nav";
import Home from "./pages/Home/Home";
import Category from "./pages/Category/Category";
import Param from "./pages/categoryDetails/CategoryDetails";
import "./App.css";

class App extends Component {
  state = { cartItems: [], cartQuantity: 0 };
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category />} />
            <Route path="/category/:id" element={<Param />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
