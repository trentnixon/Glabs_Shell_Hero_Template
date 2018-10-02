import React from 'react';
import {GA} from "../../../actions/ga";


// Component Documentation 
// https://www.npmjs.com/package/react-share
import {
    FacebookShareButton,FacebookIcon,TwitterShareButton,TwitterIcon
  } from 'react-share';


// To DO: 
// Split each social option into components!
let shareUrl=null, title=null, iconSize=32;
export default class SocialBar extends React.Component {

    componentWillMount(){ 
       
        if(this.props.UI.Data.ProjectSocial.ShareUrl === null){
            shareUrl = window.location.href; 
        }
        else{
            shareUrl = this.props.UI.Data.ProjectSocial.ShareUrl;
        }
        
        title = this.props.UI.Data.ProjectSocial.ShareHeader;
 
    } 
  render() {
    return(
        <div id="ShareMe">
        <h3>Share</h3> 
        <ul className="ShareButtons">
            <li
                onClick={()=>{GA('Social Media Button Clicked','Facebook',shareUrl)} }
            >
                <FacebookShareButton
                    url={shareUrl} 
                    quote={title}
                    className="Demo__some-network__share-button"
                    
                >
                    <FacebookIcon
                        size={iconSize}
                        round 
                    />
                </FacebookShareButton>
                </li>
            <li
                onClick={()=>{GA('Social Media Button Clicked','Twitter',shareUrl)} }
            >
                <TwitterShareButton
                    url={shareUrl}
                    title={title}
                    className="Demo__some-network__share-button"
                    
                    >
                    <TwitterIcon
                    size={iconSize}
                    round />
                </TwitterShareButton>
                </li>
            </ul>
        </div>
     
    )
  }
}
