import React from 'react';
import BodyCopy from "../components/Body/Body_Copy";

export default class DisplayBodyCopy extends React.Component {

  componentWillMount(){}

  render() {

    return(
        <div className={"BodyCopy " + this.props.position}>
                <div className="container">
                {
                    // eslint-disable-next-line 
                    this.props.Copy.map((copy,i)=>{
                        if(copy.type==="p")
                        {
                            return(
                                <BodyCopy 
                                    key={i}
                                    p={copy.copy}
                                />
                            )
                        }
                        else if(copy.type==="h1")
                        {
                            return(
                                <h1 key={i}>
                                    {copy.copy}
                                </h1>
                            )
                        }
                        else if(copy.type==="h2")
                        {
                            return(
                                <h2 key={i}>
                                    {copy.copy}
                                </h2>
                            )
                        }
                        else if(copy.type==="h3")
                        {
                            return(
                                <h3 key={i}>
                                    {copy.copy}
                                </h3>
                            )
                        }
                    })
                }
            </div>
        </div>
    )
  }
}
