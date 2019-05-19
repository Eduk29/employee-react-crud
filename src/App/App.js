import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ListEmployee from "./../pages/ListEmployee/ListEmployee";
import NewEmployee from "./../pages/NewEmployee/index";
import UpdateEmployee from "./../pages/UpdateEmployee/index";
import DetailsEmployee from "./../pages/DetailsEmployee/DetailsEmployee";
import RemoveEmployee from "./../pages/RemoveEmployee/index";

function App() {
  return (
    <BrowserRouter basename="/employee">
      <Switch>
        <Route path="/" exact component={ListEmployee} />
        <Route path="/new" exact component={NewEmployee} />
        <Route path="/:id/update" exact component={UpdateEmployee} />
        <Route path="/:id/details" exact component={DetailsEmployee} />
        <Route path="/:id/remove" exact component={RemoveEmployee} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;