import React, { useState,Component } from "react";

import './App.css'; 
import './index.css';
import Img from './Image/1.jpg';

class Contact extends Component {
  render() {
    return (
    
      <div className="container">
        <h1>Registration Form</h1>
        <div class="row">
      
        <div className="card col-lg-8 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputName">Name</label>
                    <input type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Name"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputmobno">Mobile Number</label>
                    <input type="number" 
                        className="form-control" 
                        id="number" 
                        placeholder="Mobile Number"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Register
                </button>
            </form>
        </div>
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
          <img className="responsive" src= {Img} alt="pic"  width={500} height={300} mode='fit'  />
        </div>
  </div>
  </div>
    );
  }
}
 
export default Contact;
