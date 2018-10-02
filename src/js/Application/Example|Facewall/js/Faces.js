import React from 'react';
import FaceCard from "./Card";
import Count from "./Count";


import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';


let display={
  xs:'col-xs-6',
  sm:'col-sm-6',
  md:'col-md4',
  lg:'col-lg-3',
  xl:'col-xl-3'
};

let ActiveFace=null; 
class Faces extends React.Component {
  state = { expanded: false };

  createDisplay(key,value){
        let Col = 12/value;
        display[key]="col-"+key+"-"+Col;
  }

  componentWillMount(){
    // eslint-disable-next-line
    Object.entries(this.props.UI.UI.display).map((bp,i)=>{
      this.createDisplay(bp[0], bp[1])
    })

  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
   
    if(this.props.APP.UI_SET_ACTIVE_FACE === this.props.count){
      ActiveFace="ActiveFace"
    }
    else{
      ActiveFace=""
    }
    // const { classes } = this.props;
    return (
        <div className={"nopadding Face " + display.xs +' '+ display.sm +' '+  display.md +' '+  display.lg +' '+  display.xl+' '+ActiveFace }  >
        <Card className="FaceOuter">
    
          <CardMedia
              className="FaceMedia"
              image={this.props.Face.Face}
              title={this.props.Face.Title}
          >
            
            <CardActions  className="FaceAction" disableActionSpacing>
                <h2> {this.props.Face.Title} </h2>
                <FaceCard  
                  Data={this.props.Face}
                  int={this.props.count}
                  {... this.props}
                />
               
          </CardActions>
          </CardMedia>

          <Count  int={this.props.count} include={this.props.UI.UI.Count} />
        </Card>
        </div>
    );
  }
}
export default (Faces);