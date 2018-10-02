import React from 'react';

import Stepper from "./stepper";
import {SetUIActive} from "../actions/actions";

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import IconButton from '@material-ui/core/IconButton';

import Grow from '@material-ui/core/Grow';
import Icon from '@material-ui/core/Icon';

const styles = {
 
};

function Transition(props) {
  return <Grow direction="down" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false,
  };

  componentWillMount(){
   // console.log(this.props.int)
   }
  handleClickOpen = () => {
    SetUIActive(this.props.int)
    console.log("set Active")
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
      // eslint-disable-next-line 
      //console.log(this.props)
  
    return (
      <div className="CardCTA">
          <Button onClick={this.handleClickOpen} className="ActionButton" >
              <i className="material-icons">
                {this.props.APP.APPLICATION.Icons.iconView}
              </i>
          </Button>

            <Dialog
                fullScreen
                open={this.state.open}
                onClose={this.handleClose}
                TransitionComponent={Transition}
                className="Card"
            >
         
            <div>
                <IconButton color="inherit" className="CloseCard" onClick={this.handleClose} aria-label="Close">
                    <Icon>
                        {this.props.APP.APPLICATION.Icons.IconClose}
                  </Icon>
                </IconButton>

                <Stepper 
                  int={this.props.int}
                  {... this.props}
                />
            </div>
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);