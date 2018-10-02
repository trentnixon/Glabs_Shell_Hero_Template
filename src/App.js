import React, { Component } from 'react';
import ReactGA from 'react-ga';

import LoadingScreen from "./js/pages/Loading";
import Main from "./js/pages/Main";

// Import Functions
import { connect } from "react-redux";
import { FetchData } from "./actions/Load";


// Include CSS
import './App.css';
/**
 * Fetch the project Content an dset up the UI
 */
const Content = new FetchData();


/**
 * Dev/production enviormant Variables
 */
const CDN = 'http://mini-connected.surge.sh/';
let http =null, Bottom= false;

const Path='assets/';
const Images='images/';
const Json='json/';

if(process.env.NODE_ENV === 'development'){ http = '/';}
else if(process.env.NODE_ENV === 'production'){ http = CDN; }

Content.start(http+Json, http+Path+Images); 


/**
 * GA Commands
 */
ReactGA.initialize('UA-76345112-10');
ReactGA.pageview(window.location.pathname + window.location.search);

// Raise an Event is the user scrolls to the bottom of the Page
window.onscroll = function(ev) {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

    if(Bottom === false){
       
      ReactGA.event({
          category: 'Scroll',
          action: "@ the Bottom",
          label:"User scrolled to the bottom of the page"
        });
       
      Bottom = true
    }
   
  }
}

class App extends Component {
  componentWillMount(){}
  componentDidMount(){}
  render() {    
    if(this.props.UI.UI_SET !== false){
      return ( <Main {... this.props}/>);
    }else{
      return( <LoadingScreen {... this.props}/> )
    }
  }
}

const mapStateToProps = (state) => ({
  UI: state.UI,
  APP: state.APP
})
export default connect(mapStateToProps)(App);
// export default App;