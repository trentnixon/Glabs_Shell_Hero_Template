import React, { Component } from 'react';
export default  class App extends Component {
    render() {
        return(
            <div className="container" id="LoadingScreen">
                <div className="lds-facebook"><div></div><div></div><div></div></div>
            </div>
        )
    }
}