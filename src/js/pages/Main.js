import React, { Component } from 'react';
// Import Layout Components
import OuterShell from "../dom/OuterShell";
/*
import Header from "../dom/Header";
import BodyCopy from "../dom/BodyCopy";
import Footer from "../dom/Footer";
import SocialBar from "../dom/CTA_SocialShare_Bar";
*/
// Application
import Default from "../Application/Default/Default";

// Use this component to build up the Project Layout
export default class Main extends Component {
  render() {
    
    return (
        <div className="container-fluid" id="Glabs">
          <OuterShell  {... this.props} >
              <Default {... this.props}/>
          </OuterShell>
        </div>
        ) 
  }
}
