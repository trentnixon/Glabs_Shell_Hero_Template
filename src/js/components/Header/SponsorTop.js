import React, { Component } from 'react';
import {GA} from "../../../actions/ga";

export default class Header extends Component {

  render() {
    return ( 
      <div className="row" id="Sponsor">
        <div className="col-xs-12 col-sm-6 text-left">
            <a 
              href={this.props.UI.Data.partnerZone.Url}
              onClick={ () =>{GA('Link Clicked', 'Header Link Clicked', this.props.UI.Data.partnerZone.Url)}}
            >
                {this.props.UI.Data.partnerZone.HeaderCopy}
            </a>
        </div>
        <div className="col-xs-12 col-sm-6 text-right">  
            <a 
              href={this.props.UI.Data.Client.Url}
              target="_blank"  
              rel="noopener noreferrer"
              data-category="Link Clicked"
              onClick={ () => {GA('Link Clicked', 'Header Link Clicked', 'Client Logo')}}
            >
                <img src={this.props.UI.UI.ImagePath+this.props.UI.Data.Client.Logo} alt={this.props.UI.Data.Client.Name} />
            </a>
            <span>{this.props.UI.Data.Client.Copy}</span> 
        </div>
      </div>
    );
  } 
}