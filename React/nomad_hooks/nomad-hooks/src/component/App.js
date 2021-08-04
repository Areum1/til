import React from "react";
import { Switch, Route } from "react-router-dom";
import { mainPage, useStatePage, useInputPage, useTabsPage, useEffectPage } from "../pages/pages";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={mainPage} />
        <Route exact path="/useState" component={useStatePage} />
        <Route exact path="/useInput" component={useInputPage} />
        <Route exact path="/useTabs" component={useTabsPage} />
        <Route exact path="/useEffect" component={useEffectPage} />
      </Switch>
    </>
  );
};

export default App;