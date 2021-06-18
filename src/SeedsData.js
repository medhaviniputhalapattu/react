import React, { Component } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

class SeedsData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  async componentDidMount() {
    const response = await axios.get(
      "https://localhost:44332/api/Seeds/"
    );
    this.setState({ items: response.data });
  }

  handleDelete = (id) => {
    console.log(id);
  };

  render() {
    const list = [];
    this.state.items.forEach((element) => {
      list.push(
        <tr>
          <td>{element.id}</td>
          <td>{element.title}</td>
          <td>{element.seedtype}</td>
          <td>{element.price}</td>
          <td>{element.filename}</td>
          
        </tr>
      );
    });
    return (
      <>
        <br />
        <br />
        <br />
        <br />
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <h3>Entries For Seeds</h3>
        </div>
        <div>
          <table class="table table-hover">
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>SeedType</th>
              <th>Price</th>
              <th>FileName</th>
              
            </tr>
            {list}
          </table>
        </div>
        <div
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <NavLink to="/DeleteSeedsEntry">Delete Record</NavLink>
        </div>
        <div>
          style={{
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
          }}
        
          <NavLink to="/UpdateSeedsEntry">Update Record</NavLink>
        </div>
      </>
    );
  }
}

export default SeedsData;