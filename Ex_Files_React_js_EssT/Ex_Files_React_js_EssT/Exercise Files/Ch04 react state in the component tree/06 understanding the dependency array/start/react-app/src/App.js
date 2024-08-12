import "./App.css";
import { useState, useEffect } from "react";
//let's understand more abour array dependencies in useEffect
function App() {
  const [emotion, setEmotion] = useState("happy");
  //it is possible to use our useEffect calls in or useState calls to keep track of variables
  const [secondary, setSecondary] = useState("tired"); //create a new state variable called secondary, and a function to update it called setSecondary, the default emotion is tired
  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion, secondary]); //this useEffect call is going to run every time the emotion OR secondary state variables change, the dependency array is the second argument to useEffect, and it is an array of variables that useEffect should watch for changes (the dependency array tells the code when to run the useEffect function)

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]); //this useEffect call is going to run every time the secondary state variable changes
  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>
        Sad
      </button>
      <button
        onClick={() => setEmotion("excited")}
      >
        Excited
      </button>
      <h2>Current secondary emotion is {secondary}</h2>
      <button onClick = {() => setSecondary("grateful")}>Grateful</button>
    </div>
  );
}

export default App;
