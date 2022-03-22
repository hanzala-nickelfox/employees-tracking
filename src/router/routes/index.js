import React from "react";
import { Route } from "react-router-dom";

function RoutingList({ RoutingListData }) {
  return (
    <>
      {RoutingListData.map(({ RoutingListData, path }) => (
        <Route
          key={path}
          path={RoutingListData.path}
          element={RoutingListData.element}
        />
      ))}
    </>
  );
}

export default RoutingList;
