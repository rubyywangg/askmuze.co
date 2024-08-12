import "./App.css";
//another hook that we use in react often is useEffect, which allows us to perform side effects in our components (note: these side effects aren't related to the components rendering, but rather to other things like data fetching, subscriptions, or manually changing the DOM from React components)
import { useState, useEffect } from "react";


function App() {
  const [emotion, setEmotion] = useState("happy");
//useEffect takes two arguments: a function and an array of dependencies (or WHEN the effect should run)
  useEffect(()=>{ //pass in a function that prints out he current emotion to the console
    console.log(`It's ${emotion} right now`);
  }, [emotion]); //passing in an empty array means that effect is not going to be called again after the first render, if you pass in a state variable, the effect will run every time that state variable changes, not passing in the second argument means that the effect will run every time the component renders (but will take in the default answer)

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
    </div>
  );
}

export default App;
