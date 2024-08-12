import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { App, About, Contact, History } from "./App";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />}>
        <Route //this is a nested route, it is a route that is nested inside of another route
        path="history" 
        element={<History />} 
        />
      </Route> {/*you need to end the route so that you can clearly match the route based on the order they are defined*/}
      <Route
        path="/contact"
        element={<Contact />}
      />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
