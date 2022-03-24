import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {}
// custom hooks to get state stored in redux
export const useIsLoggedIn = () => {
  const isloggedin = useSelector((state) => state.userReducer.isloggedIn);
  const isMounted = useRef(true);
  useEffect(()=>{
    const auth= getAuth()
    onAuthStateChanged(auth,(user)=>{
        if(user){

        }
    })
  },[])
  return { isloggedin };
};
