import { useContext } from "react";
import { HotelContext } from "../../context/AuthProvider";

const useAuth = ()=>{
    return useContext(HotelContext);
}
export default useAuth;