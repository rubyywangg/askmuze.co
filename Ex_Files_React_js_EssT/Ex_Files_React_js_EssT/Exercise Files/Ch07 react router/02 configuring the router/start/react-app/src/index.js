import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {App, About, Contact} from "./App";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"; //this is the react router library that we are importing


ReactDOM.render(
  <BrowserRouter> {/*this is the parent component that we wrap all of our routes in*/}
    <Routes> {/*this is the component that we use to define all of our routes*/}
      <Route path="/" element={<App />} /> {/*this is the route that we are defining, the path is the URL that we want to match, and the element is the component that we want to render when the URL matches the path (this is the homepage!)*/}
      <Route path="/about" element={<About />} /> {/*this is the route that we are defining, the path is the URL that we want to match, and the element is the component that we want to render when the URL matches the path (this is the about page!)*/}
      <Route path="/contact" element={<Contact />} /> {/*this is the route that we are defining, the path is the URL that we want to match, and the element is the component that we want to render when the URL matches the path (this is the contact page!)*/}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

