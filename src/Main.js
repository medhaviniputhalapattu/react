import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter as Router
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import seeds from "./seeds";
import SeedsData from './SeedsData';
import UpdateSeeds from "./UpdateSeeds";
import DeleteSeeds from "./DeleteSeeds";
import Contact from "./Contact";
import "./App.css";
import "./index.css";
import Footer from "./Footer";
import Plants from "./Plants";

import {NavDropdown}  from "react-bootstrap";
import { right } from "@popperjs/core";
class Main extends Component {
  render() {
    return (

        <HashRouter>
        
          <h1 style={{textAlign:"center"}}>ONLINE INDOOR PLANT  </h1>
        <div>
         
          <ul className="header">
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/seeds">Seeds</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li style={{float:right,marginRight:20,marginTop:16}} ><input type="text" placeholder="Search.." style={{borderRadius:100,borderStyle:"solid",borderColor:"black",height:35,width:200}}></input></li>
            <li style={{float:right,marginRight:20}} >
            <NavDropdown title="Plants" >
        
        <a className="nav-item dropdown" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown">
          Plants</a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">Self Watering Plants</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Wall Mounted Plants</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">Vertical Garden Plants</a>
            <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Table Top Plants</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Window sill Plants</a>
          </div>
        

      
      </NavDropdown> 
         </li>
          </ul>

          
          <div className="content">
          <Route exact path="/" component={Home}/>
          <Route  path="/plants" component={Plants}/>
          <Route  path="/about" component={About}/>
          <Route  path="/seeds" component={seeds}/>
          <Route  path="/AllSeedsRecords" component={SeedsData}/>
          <Route  path="/UpdateSeedsEntry" component={UpdateSeeds}/>
          <Route  path="/DeleteSeedsEntry" component={DeleteSeeds}/>
          <Route path="/contact" component={Contact}/>

          
          </div>
        </div>
        
        
        <Header></Header>
        </HashRouter>

      
    );
  }
}
 
export default Main;