import React from "react";
import { genres } from "../Service";
import Row from "./Row";
import "./App.css";

const App = () => (
  <div className="app">
    {genres.map((g) => (
      <Row {...g} key={g.title} />
    ))}
  </div>
);

export default App;
