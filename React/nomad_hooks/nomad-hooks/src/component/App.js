import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useStatePage, useInputPage } from '../pages/pages';

const App = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={useStatePage} />
                <Route exact path="/useInput" component={useInputPage} />
            </Switch>
        </>
    );
};

export default App;