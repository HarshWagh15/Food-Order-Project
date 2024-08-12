
import { GET_MENU_FAIL, GET_MENU_REQUEST, GET_MENU_SUCCESS } from "../constants/menuConstants"
import axios from "axios";

export const getMenus=(id)=>async(dispatch) => {
    try {
        dispatch({type:GET_MENU_REQUEST})
        let link=`/api/v1/eats/stores/${id}/menus`;
        const response=await axios.get(link)
        console.log(response.data.data[0].menu);

        dispatch({
            type:GET_MENU_SUCCESS,
            payload:response.data.data[0].menu,
        })
    } catch (error) {
        dispatch({
            type:GET_MENU_FAIL,
            payload:error.message,
        });
    }
};