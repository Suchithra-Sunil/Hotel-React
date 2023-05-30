import axios from "axios";
import { FAIL, SUCCESS } from "../constants/hotelconstant";


export const getHotel=async (dispatch)=>{
    try{
        const result=await axios.get('/hotels.json')
        console.log(result.data.hotels);
        dispatch(
            {
                payload:result.data.hotels,
                type:SUCCESS
            }
        )
    }
    catch(err){
        dispatch(
            {
                payload:err,
                type:FAIL
            }
        )

    }
    
}