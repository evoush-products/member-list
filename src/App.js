import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home, Product } from "./pages";
import { Header, Particle } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      {/* <div id="tsparticles"> */}
      <Particle />
      <div id="content-evoush">
        <Header />
        <Switch>
          <Route path="/product" component={Product} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
      {/* </div> */}
    </BrowserRouter>
  );
};

export default App;
