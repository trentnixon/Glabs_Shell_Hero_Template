
import store from "../../../store/store";

export function SetUIActive(id){
        console.log(id)
    store.dispatch({ type:"UI_SET_ACTIVE_FACE", payload:id });
}