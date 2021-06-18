import React, { Component } from 'react'
import SeedsForm from './SeedsForm';

export class seeds extends Component {
    render() {
        return (
            <>
              <br />
              
              <div className="d-flex justify-content-center">
                <h3>Seeds Registration</h3>
              </div>
              <hr />
              <div className="d-flex justify-content-center">
                <SeedsForm />
                
              </div>
            </>
          );
            
    }
}

export default seeds
