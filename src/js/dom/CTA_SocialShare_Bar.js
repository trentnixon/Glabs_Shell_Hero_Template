import React, { Component } from 'react';
import CTA from "../components/Social/CTA";
import ShareOptions from "../components/Social/SocialContainer";

export default class Header extends Component {
  render() {
    return ( 
            <div id="ShareBar" >
                <div className="container">
                    <div className="row" >
                        <div className="col-sm-12 col-md-4 text-left">
                            <ShareOptions {... this.props} />
                        </div>
                        <div className="col-sm-12 col-md-8 text-right">
                            <CTA {... this.props}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
} 