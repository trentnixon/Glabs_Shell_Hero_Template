// import React from "react";

const InitialState ={
	APPLICATION:false,

}

const APP = (state=InitialState, action) =>{
		// eslint-disable-next-line 
		switch(action.type){
			
			case "STORE_APPLICATION":{
			return {...state, APPLICATION:action.payload}
				// eslint-disable-next-line 
				break
			}
		}
		return state;
	}
export default APP;	