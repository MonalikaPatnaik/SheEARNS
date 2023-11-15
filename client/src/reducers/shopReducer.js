import { ALL_SHOP_FAIL, ALL_SHOP_REQUEST, ALL_SHOP_SUCCESS,CLEAR_ERRORS } from "../constants/shopConstants";

export const shopReducer=(state={shops:[]},action)=>
{
    switch(action.type)
    {
        case ALL_SHOP_REQUEST:
            return{
                loading:true,
               shops:[]

            };
            case ALL_SHOP_SUCCESS:
                return{
                    loading:false,
                   shops:action.payload.shops,
              
                };
            case ALL_SHOP_FAIL:
                return{
                    loading:false,
                    error:action.payload

                }
            case CLEAR_ERRORS:
                return{
                    ...state,
                    error:null

                }
            
                default:
                    return state;


    }
}