import axios from "axios";
import { ALL_SHOP_REQUEST, ALL_SHOP_SUCCESS, ALL_SHOP_FAIL } from "../constants/shopConstants";

export const getShop = (keyword = " ") => async (dispatch) => {
  try {
    dispatch({
      type: ALL_SHOP_REQUEST,
    });

    const response = await axios.get(`http://localhost:4000/api/v1/shops?keyword=${keyword}`);
    console.log(response);

    dispatch({
      type: ALL_SHOP_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    console.error("Error in getShop:", error);

    dispatch({
      type: ALL_SHOP_FAIL,
      payload: error.response ? error.response.data : "Unknown error",
    });
  }
};
