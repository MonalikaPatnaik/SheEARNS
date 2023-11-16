import axios from "axios";
import { ALL_ITEM_REQUEST, ALL_ITEM_SUCCESS,ALL_ITEM_FAIL } from "../constants/itemConstants";

export const getItems=(id)=> async(dispatch)=>{
    try{
        dispatch({
            type:ALL_ITEM_REQUEST
        })
        const baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : 'https://sheearns.onrender.com';
        const {data}=await axios.get(`${baseURL}/items/${id}`);
        console.log("got"+data);

        dispatch({
            type:ALL_ITEM_SUCCESS,
            payload:data
        })

    }
    catch(error){
        dispatch({
            type:ALL_ITEM_FAIL,
            payload:error.response.data.message
        })
    }
}