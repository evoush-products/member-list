import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import { Home, About } from "./pages";
import { Header, Particle } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Particle />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            color: "#fff",
          }}
        >
          <Header />
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
