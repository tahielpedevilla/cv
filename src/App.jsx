import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";

import LandingLayout from "./components/layout/LandingLayout";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={LandingLayout} path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
