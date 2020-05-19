import React from "react";
import {Route,Switch, Link} from "react-router-dom";
import Home from "./Home";
import PizzaForm from "./components/PizzaForm.js";

const App = () => {
  return (
    <>
        <Link to="/">
        <Home />
        </Link to="pizzaform">
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      {/* <Link to={`/`}> */}
      <button>Create Pizza</button>
      {/* </Link> */}
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pizzaform" component={PizzaForm} />
      </Switch>
    </>
  );
};
export default App;
