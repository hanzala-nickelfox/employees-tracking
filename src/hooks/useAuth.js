import { useSelector } from "react-redux";

export const useIsLoggedIn = () => {
  const isloggedin = useSelector((state) => state.userReducer.isloggedIn);
  const isUser = useSelector((state) => state.userReducer.isUser);
  return { isloggedin , isUser};
};
