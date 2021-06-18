import React, { Component } from "react";
 
class Plants extends Component {
  render() {
    return (
        <div class="nav-item dropdown" className="dropdown" class="nav-link dropdown-toggle">
        <a href="#" id="navbarDropdown" role="button" data-toggle="dropdown">Plants</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Self Watering Plants</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Wall Mounted Plants</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Vertical Garden Plants</a>
            <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Table Top Plants</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Window sill Plants</a>
          </div>
        </div>
    );
  }
}
 
export default Plants;