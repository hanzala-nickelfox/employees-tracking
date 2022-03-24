import { useSelector } from "react-redux";
// custom hooks to get state stored in redux
export const useIsLoggedIn = () => {
  const isloggedin = useSelector((state) => state.userReducer.isloggedIn);

  return { isloggedin };
};
