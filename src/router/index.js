import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Error404 from "pages/Error404";


const Router = () => {


  return (

    <BrowserRouter>
      <Switch>


        {/* Remove this and Start New Rounting Here */}
        {/* 404 page route */}
        <Route exact path="*" component={Error404} />
      </Switch>
    </BrowserRouter>

  );
};

export default Router;
