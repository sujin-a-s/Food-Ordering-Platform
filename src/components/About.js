import React from 'react'
import { Outlet } from 'react-router-dom';
import ProfileFunctional from './ProfileFunctional.js';
import ProfileClass from './ProfileClass.js';
import { Component } from 'react';

class About extends Component {
  constructor(props) {
    super(props);

    //console.log("Parent - constructor");
  }
  componentDidMount() {
    // Best place to make an Api call
    //console.log("Parent - componentDidMount");
  }
  render() {
    //console.log("PArent - render");
    return (
      <div>
        <h2>About Us Page</h2>
        
        <ProfileFunctional />
        
      </div>  
      
    );

  }

}

export default About;