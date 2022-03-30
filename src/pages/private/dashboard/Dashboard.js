import React from "react";
import { getAuth } from "firebase/auth";

const Dashboard = () => {
  const auth = getAuth();
  const user = auth.currentUser.displayName;

  return (
    <>
      <h3>UserName:{user}</h3>
    </>
  );
};

export default Dashboard;
