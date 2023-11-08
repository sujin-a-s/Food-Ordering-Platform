import React from 'react'
import { Outlet } from 'react-router-dom';
import ProfileFunctional from './ProfileFunctional.js';
import ProfileClass from './ProfileClass.js';
import { Component } from 'react';
import UserContext from '../utils/UserContext.js';

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

        <UserContext.Consumer>
          {({user}) => {
            return <h4 className="font-bold text-xl p-10">{user.name}-{user.email}</h4>
          }}
        </UserContext.Consumer>
        
        <ProfileClass />
        
      </div>  
      
    );

  }

}

export default About;