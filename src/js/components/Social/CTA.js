import React, { Component } from 'react';
import {GA} from "../../../actions/ga";
export default class Header extends Component {
  render() {
      let Path = this.props.UI.Data.partnerZone;
    return ( 
            <a 
            href={this.props.UI.Data.partnerZone.Url}
                className="ReadMore"
                onClick={()=>{GA('Link Clicked','CTA Bar',Path.Url)} }
            >
                {Path.FooterCopy[0]}<br /> <strong>{Path.FooterCopy[1]}</strong> 
            </a>
        );
    } 
} 