import React from 'react';
import PropTypes from 'prop-types';

import {SetUIActive} from "../actions/actions";

import { withStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
//import Paper from '@material-ui/core/Paper';
//import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';


const styles = theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing.unit * 4,
    marginBottom: 20,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    overflow: 'hidden',
    width: '100%',
  },
});

let tutorialSteps=[];
class SwipeableTextMobileStepper extends React.Component {
  state = {
    activeStep: this.props.int,
  };

  componentWillMount(){
    //console.log(this.props.UI.Data.Faces)
    tutorialSteps = this.props.APP.APPLICATION.Faces;
   }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));

    SetUIActive(this.state.activeStep + 1)
   
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));

    SetUIActive(this.state.activeStep - 1)
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };


  render() {
    const { classes, theme } = this.props;
    const { activeStep } = this.state;

    const maxSteps = tutorialSteps.length;

    return (
      <div className="row CardOuter">

        <div className="col-md-6 col-sm-12 CardImage">
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={this.state.activeStep}
                onChangeIndex={this.handleStepChange}
                enableMouseEvents
                className="Image"
            >
                {
                    tutorialSteps.map((step,i)=>{
                        return(<img key={i} className={classes.img} src={step.Face} alt={step.label} />)
                    })
                }
            </SwipeableViews>
        </div>

        <div className="col-md-6 CardContent">
                <h1>{activeStep+1}. {tutorialSteps[activeStep].Title}</h1>
                <p>{tutorialSteps[activeStep].Description}</p>

        
        </div>
        
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          className="Stepper hidden-xs-down"
          nextButton={
            <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
              Next
              {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
              {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              Back
            </Button>
          }
        />
        
      </div>
    );
  }
}

SwipeableTextMobileStepper.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SwipeableTextMobileStepper);