import React from "react";
import Dashboard from "pages/private/DashBoard/Dashboard";
import Activities from "pages/private/Activities/Activities";
import Projects from "pages/private/Projects/Projects";
import Personal from "pages/private/Personal/Personal";
import Learning from "pages/private/Learning/Learning";
import Festivals from "pages/private/Festivals/Festivals";
import Error404 from "pages/Error404";

export const PrivateRoutes = [
  {
    path: "dashboard",
    element: <Dashboard />
  },

  {
    path: "activities/*",
    element: <Activities />,
    children: [
      {
        path: ":projects/*",
        element: <Projects />
        // details: {
        //   path: ":details",
        //   element: (
        //     <div>
        //       details
        //     </div>
        //   )
        // }
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
      },
      {
        path: "details/*",
        element: (
          <div>
            <h1>Details</h1>
          </div>
        )
      }
    ]
  },

  {
    path: "*",
    element: <Error404 />
  }
];
