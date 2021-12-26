import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";
import Api from "../../Api.js";

class Category extends Component {
  state = { errorMes: null, data: [] };
  async componentDidMount() {
    try {
      const data = await Api.get("");
      console.log(data.data);
      this.setState({ data: data.data });
    } catch (err) {
      console.log(err);
    }
  }

  insertStreets = () => {
    return this.state.data.map((e) => {
      return (
        <Link key={e.id} to={`/category/${e.id}`}>
          <div className="cat-card" style={{ border: "1px solid black" }}>
            <h4>{e.category}</h4>
          </div>
        </Link>
      );
    });
  };

  render() {
    return (
      <div
        style={{
          background: `linear-gradient(
        -45deg,
        #325176,
        #7b9ea7,
        #9baf93,
        #dbaf81,
        #fbdf73
      )`,
        }}
        className="category-hero"
      >
        <div className="cat-cont">
          <h2>Categories</h2>
          <div className="category-links-wrap">{this.insertStreets()}</div>
        </div>
      </div>
    );
  }
}

export default Category;
