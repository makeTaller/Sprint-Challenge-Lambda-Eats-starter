import React from "react";
import {Route, Link} from "react-router-dom";

const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      <Link to={`/pizza/${pizzaForm.id}`}>
      <button>Create Pizza</button>
    </>
  );
};
export default App;
