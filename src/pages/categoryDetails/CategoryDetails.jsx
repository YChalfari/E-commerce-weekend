import React, { Component } from "react";
import Api from "../../Api";
class CategoryDetails extends Component {
  state = { data: {} };

  async componentDidMount() {
    try {
      console.log(this.props);
      const data = await Api.get(`/category/${this.props.details.id}/shoes`);

      const filteredData = data.data.filter(
        (item) => item.categoryID !== this.props.details.id
      );
      console.log(filteredData);
      this.setState({ data: data.data });
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    return (
      <div>
        <h1>{this.state.data.name}</h1>
      </div>
    );
  }
}

export default CategoryDetails;
