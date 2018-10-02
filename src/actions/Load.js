import axios from 'axios';
import store from "../store/store";

export function FetchData(){

    /** Set Properties */
       this.application="application.json"
        this.data="data.json"
        this.ui="UI.json"
       
    /** Set Methods */ 
 
    this.start = ($Path,$ImgPath) => {

        // Set Json Path
        this.path=$Path;
        // Create Json Array 
        this.init=[this.path+this.application,this.path+this.data,this.path+this.ui]

        // Set Image path
        store.dispatch({ type:"STORE_IMAGEPATH", payload:$ImgPath });
        
        // Fetch Json Data for build
        axios.all(this.init.map(l => axios.get(l)))
        .then(axios.spread(function (...res) {
                // Store the returned Values to the Reducer
                console.log(res);
                // Store UI Data
                store.dispatch({ type:"STORE_UI", payload:res[2].data });
                // Store Project Data
                store.dispatch({ type:"STORE_DATA", payload:res[1].data });
                // Store Application Data
                store.dispatch({ type:"STORE_APPLICATION", payload:res[0].data });
                // SET UI to True
                store.dispatch({ type:"UI_SET", payload:true });
            })
        )
        .catch(function (error) { console.log(error); });
    }
}
