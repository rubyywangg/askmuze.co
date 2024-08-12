import "./App.css";
import { useState, useEffect } from "react";
//now we want to display our data in a component!
function GithubUser({name, location, avatar}){ //when we pass in parameters inside the {} we are destructuring the props object. we are  extracting specific properties from an object or an array passed into the function. in this case, all of these properties come from the data object and name, location and avatar are all properties when you open the JSON.stringify version of the api! 
  return(
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} alt={name} height={150}/>
    </div>
  )
}
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      `https://api.github.com/users/moonhighway` //fetch is a built-in function in the browser that allows you to make network requests similar to XMLHttpRequest (XHR)
    )
      .then((response) => response.json())
      .then(setData);
  }, []);
  if (data)
    return (
      <GithubUser 
      //here, we are passing in the data objects properties as props to the GithubUser component
      name = {data.name} 
      location = {data.location} 
      avatar = {data.avatar_url}/> 
    );
  return <h1>Data</h1>;
}

export default App;
