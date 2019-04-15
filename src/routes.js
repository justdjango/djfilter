import React from "react";
import { Route } from "react-router-dom";
import Hoc from "./hoc/hoc";

import Login from "./containers/Login";
import Signup from "./containers/Signup";
import Form from "./containers/Form";
import InfiniteResults from "./containers/InfiniteScrollResults";

const BaseRouter = () => (
  <Hoc>
    <Route exact path="/login/" component={Login} />
    <Route exact path="/signup/" component={Signup} />
    <Route exact path="/infinite/" component={InfiniteResults} />
    <Route exact path="/" component={Form} />
  </Hoc>
);

export default BaseRouter;
