import React, { Component } from "react";
import Api from "../../Api";
class CategoryDetails extends Component {
  state = { data: {} };

  async componentDidMount() {
    try {
      const data = await Api.get(this.props.details.city);
      console.log(this.props);
      this.setState({ data: data.data });
    } catch (err) {}
  }

  render() {
    console.log("brr");
    return (
      <div>
        <h1>{this.state.data.name}</h1>
      </div>
    );
  }
}

export default CategoryDetails;
