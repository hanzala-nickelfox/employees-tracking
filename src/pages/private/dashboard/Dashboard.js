import React from "react";
import { getAuth } from "firebase/auth";
import { useIsLoggedIn } from "hooks/useAuth";
const Dashboard = () => {
  const auth = getAuth();
  const user = auth.currentUser.displayName;
  const { isUser } = useIsLoggedIn();
  return (
    <>
      {isUser ? (
        <h3>User Logged In: {user}</h3>
      ) : (
        <h3>Logged In: {user}</h3>
      )}
    </>
  );
};

export default Dashboard;
