import React, { Component } from 'react';
import Face from "./js/Faces";

export default  class Wall extends Component {
  componentWillMount(){}
  render() {

    return(
      <div className="container">
        <div className="row">
              {
                this.props.APP.APPLICATION.Faces.map((face,i)=>{
                  return(
                          <Face 
                            key={i}
                            Face={face}
                            count={i}
                            {... this.props} 
                          />
                    )
                })
              }
        </div>
      </div>
    )
  }
}