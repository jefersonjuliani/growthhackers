import React from 'react';

import { Route, Switch, Redirect } from "react-router-dom";

// core components
import {Row, Container, Sidebar} from "../components"
import routes from "@/main/routes/main.routes"
import mainRouteInterface from "@/main/routes/interface/routeInterface"

const main: React.FC = () => {

    const getRoutes = (routes: Array<mainRouteInterface>) => {
        return routes.map((prop, key) => {
          if (prop.layout === "/main") {
            return (
              <Route
                path={`${prop.path}`}
                component={prop.component}
                key={key}
              />
            );
          } else {
            return null;
          }
        });
      };

  return(
    <>
    <Row>
      <Sidebar /> 
      <Container>
        <Switch>
          {getRoutes(routes)}
          <Redirect from="*" to="/ideas" />
        </Switch>
      </Container>
    </Row>
  </>
  );
}

export default main;