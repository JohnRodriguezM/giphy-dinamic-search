import React from "react";
import logo from "./logo.svg";
import "./css/App.css";

//!components
import { GetCats } from "./components/GetCats";

function App() {
  return (
    <section className="App">
      <header>
        <GetCats />
      </header>
      <main></main>
      <footer></footer>
    </section>
  );
}

export default App;
