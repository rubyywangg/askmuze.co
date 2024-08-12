import "./App.css";
import { useState, useEffect } from "react";


function App() {
  const [data, setData] = useState(null);
  useEffect (()=>{
    fetch(`https://api.github.com/users/rubyywangg`) //fetch is a built-in function in the browser that allows you to make network requests similar to XMLHttpRequest (XHR)
    .then((response) => response.json()) //this will take the response (te response is the data we get back after we fetch it) and convert it to json
    .then(data => setData(data)) //this will take the data and set it to the state (a shortcut for this is just to write .then(setData) because the same value ("data") is being sent to the function that setData is being called with)
  }, []); //the last thing is the [], which means that we should only make a request ot fetch the dataONCE, when our application first renders (we don't want to make too many api requests)
  
  if (data){ //this is a conditional statement that says, if there is data, we want to:
    return <pre>{JSON.stringify(data, null, 2)}</pre> //this if statement says, if there is data, we want to return a pre tag with the data inside of it (the JSON.stringify function is used to convert the data into a string so that it can be displayed on the screen)
  }
  return <h1>Data</h1> //if there is no data, we will return a heading that says "Data"
}

export default App;
