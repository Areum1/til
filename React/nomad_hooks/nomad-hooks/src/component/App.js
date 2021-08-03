import React from "react";
import { Switch, Route } from "react-router-dom";
import { useStatePage, useInputPage, useTabsPage } from "../pages/pages";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={useStatePage} />
        <Route exact path="/useInput" component={useInputPage} />
        <Route exact path="/useTabs" component={useTabsPage} />
      </Switch>
    </>
  );
};

export default App;
