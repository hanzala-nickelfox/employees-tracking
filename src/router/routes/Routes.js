import React from "react";
import Login from "pages/public/Login/Login";
import SignUp from "pages/public/Signup/Signup";
import Dashboard from "pages/private/DashBoard/Dashboard";
import Activities from "pages/private/Activities/Activities";
import Projects from "pages/private/Projects/Projects";
import Personal from "pages/private/Personal/Personal";
import Learning from "pages/private/Learning/Learning";
import Festivals from "pages/private/Festivals/Festivals";
import Error404 from "pages/Error404";
import AuthWrapper from "HOC/AuthWrapper";

const Routes = [
  //Public Routes to be Added Here
  { path: "/", element: <SignUp /> },
  { path: "/login", element: <Login /> },

  //Private Wrapper to be Placed here,
  {
    path: "",
    element: <AuthWrapper />,
    children: [
      //Private Routes to Be Added Here,
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "assigned",
        element: <h1>Assigned Projects</h1>
      },

      {
        path: "activities",
        element: <Activities />,
        children: [
          {
            path: "projects",
            element: <Projects />,
            children: [
              {
                path: ":id",
                element: <h1>Details</h1>
              }
            ]
          },

          {
            path: "learning",
            element: <Learning />
          },
          {
            path: "festivals",
            element: <Festivals />
          },
          {
            path: "personal",
            element: <Personal />
          }
        ]
      },

      {
        path: "*",
        element: <Error404 />
      }
    ]
  }
];

export default Routes;
