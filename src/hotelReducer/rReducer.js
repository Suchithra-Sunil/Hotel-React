import { FAIL, SUCCESS } from "../constants/hotelconstant";

export const hotelReducer=(state={hotelList:[]},action)=>{

    switch(action.type){
      case SUCCESS:
         return { 
            hotelList:action.payload
         }
      case FAIL:
        return { 
            hotelList:action.payload
         }
        
      default:
        return state
    }
}