import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class SeedsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errmsg: "",
      title: "",
      seedtype: "",
      price: null,
      filename: ""
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleValidate = () => {
    let msg = "";
    if (
      this.state.title === "" ||
      this.state.seedtype === "" ||
      this.state.price === null ||
      this.state.filename === ""
    )
      msg = (
        <p style={{ color: "red", fontStyle: "italic" }}>
          The above fields are mandatory.
        </p>
      );
    this.setState({ errmsg: msg });
    console.log(this.state);
  };

  handleSubmit =  (e) => {
    axios
      .post("https://localhost:44332/api/Seeds", {
        title: this.state.title,
        seedtype: this.state.seedtype,
        price: this.state.price,
        filename: this.state.filename
        
      })
      .then((response) => console.log(response));
  };

  render() {
    return (
      <>
        <div>
          <NavLink to="/AllSeedsRecords">List all Records</NavLink>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="seed title"
              style={{ width: 400 }}
              onChange={this.handleChange}
            />
            <br />
            <input
              type="text"
              name="seedtype"
              className="form-control"
              placeholder="seed type"
              style={{ width: 400 }}
              onChange={this.handleChange}
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
            <input
              type="text"
              name="filename"
              className="form-control"
              placeholder="File name"
              style={{ width: 400 }}
              onChange={this.handleChange}
            />
            
            
            <div>{this.state.errmsg}</div>
            <br />
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default SeedsForm;