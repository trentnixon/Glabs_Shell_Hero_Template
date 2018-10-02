import React from 'react';
import SponsorTop from "../components/Header/SponsorTop";

export default class CreateCard extends React.Component {
  componentWillMount(){ }
  render() {
      let Path = this.props.UI.Data.Header;

    return(
        <div className="row" id="Header"  style={ { backgroundImage: `url(${Path.HeaderBgImage})` } }>
            
            <div className="container-fluid DarkBar">  
                <div className="container">
                    <SponsorTop {... this.props}/>
                </div>  
            </div>

            <div className="container-fluid Title">
             
                <div className="container Title-Container">
                    {
                        Path.Title.map((label,i)=>{
                                return(
                                    <h1 key={i}>
                                        {label}
                                    </h1>
                                )
                        })
                    }
                </div>
                <div className="Title-Fill-Color"></div>
            </div>
        </div> 
    )
  }
}
 