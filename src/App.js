import React from "react";
import {Route, Link} from "react-router-dom";
import Home from "./Home"

const App = () => {
  return (
    <>
        <Home />
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      {/* <Link to={`/`}> */}
      <button>Create Pizza</button>
      {/* </Link> */}
    </>
  );
};
export default App;
