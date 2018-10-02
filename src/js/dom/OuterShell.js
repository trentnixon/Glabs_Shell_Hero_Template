import React, { Component } from 'react';
// Import Layout Components
import Header from "./Header";
import BodyCopy from "./BodyCopy";
import Footer from "./Footer";
import SocialBar from "./CTA_SocialShare_Bar";

// Application
//import Facewall from "../Application/Facewall";

// Use this component to build up the Project Layout
export default class OuterShell extends Component {
  render() {
    
    return ( 
        <div>
            <Header     {... this.props} />
            <BodyCopy    Copy={this.props.UI.Data.BodyCopy.slice(0, 3)}/>
                 {this.props.children}

            <BodyCopy    
                  Copy={this.props.UI.Data.BodyCopy.slice(3, 4)}
                  position="below"
              />     
            <SocialBar  {... this.props} />
            <Footer     {... this.props} /> 
        </div>
        ) 
  }
}
