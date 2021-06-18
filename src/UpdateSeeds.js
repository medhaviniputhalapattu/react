import React, { Component } from "react";
import axios from "axios";

class UpdateSeeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      title: "",
      seedtype: "",
      price: null,
      filename: "",
      errMsg: "",
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleUpdate = async (event) => {
    console.log(this.state);
    await axios.put(
      "https://localhost:44332/api/Seeds" + this.state.id,
      {
        id: this.state.id,
        title: this.state.title,
        seedtype: this.state.seedtype,
        price: this.state.price,
        filename: this.state.filename
        
      }
    );
  };

  render() {
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <div
          style={{
            paddingLeft: 50,
          }}
        >
          <form onSubmit={this.handleUpdate}>
            <input
              type="number"
              name="id"
              className="form-control"
              placeholder="Id"
              onChange={this.handleChange}
              style={{ width: 300 }}
            />
            <br />
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="title"
              onChange={this.handleChange}
              style={{ width: 300 }}
            />
            <br />
            <input
              type="text"
              name="seedtype"
              className="form-control"
              placeholder="seedtype"
              onChange={this.handleChange}
              style={{ width: 300 }}
            />
            <br />
            <input
              type="number"
              name="price"
              className="form-control"
              onChange={this.handleChange}
              placeholder="price"
              style={{ width: 400 }}
            />
            <br />
            
            
           
            <div>{this.state.errmsg}</div>
            <br />
            <button className="btn btn-primary" type="submit">
              Update
            </button>
          </form>
        </div>

        <div>{this.state.errMsg}</div>
      </>
    );
  }
}

export default UpdateSeeds;