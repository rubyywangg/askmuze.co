import "./App.css";
//managing state in a React application using a hook (aka a special function that lets you use state and other React features) called useState
import {useState} from "react"; 

/*
NOTE: useState will return 2 values: a state value and a built in function that lets you update the state value
it uses array destructuring to assign the first element of the array to the state value and the second element to an updater function
 
**you don't need to initilize the updater fucntion. since react internally already knows the function is meant to update the value, you just need to tell it how to update it and it will do it for you. 
e.g. 
  const increment = () => {
    setCount(count + 1); // Update the state with the new value
  };

  // Function to decrement the count
  const decrement = () => {
    setCount(count - 1); // Update the state with the new value
  };

  notice how the setCount has 2 differnt purposes: increment and decrement. this is possible becasue setCount is a built in function that knows how to update the state value, no matter what the new value is.

*/ 
function App() {
  //const what = useState();
  //console.log(what); //let's see what useState actually returns: we get an array with two elements, the first element is the current state value, and the second element is a function that allows us to update the state value
  const [emotion,setEmotion] = useState("happy"); //useState is a function that allows us to manage state in a React application, and it takes an argument, which is the initial state value, and it returns an array
  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick = {()=>setEmotion("sad")}>Sad</button> {/* when the button is clicked, the setEmotion function is called with the argument "sad", which updates the state value */}
      <button onClick = {()=>setEmotion("excited")}>Excited</button> {/* when the button is clicked, the setEmotion function is called with the argument "excited", which updates the state value */}
    </div>
  );
}

export default App;
