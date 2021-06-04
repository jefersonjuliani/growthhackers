import React from 'react';
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";

import MainLayout from "@/presentation/layouts/main"

const main: React.FC = () => {
    return (
        <BrowserRouter >
            <Switch>
                <Route path="/" render={() => <MainLayout />} />
                <Redirect from="/" to="/ideas" />
            </Switch>
        </BrowserRouter>
    );
}

export default main;