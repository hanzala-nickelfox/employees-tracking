import { useSelector } from "react-redux";

export const useIsLoggedIn = () => {
  const isloggedin = useSelector((state) => state.userReducer.isloggedIn);

  return { isloggedin };
};
