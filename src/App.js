import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import { Products } from "./features/product/Product";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Products />
    </div>
  );
}

export default App;
