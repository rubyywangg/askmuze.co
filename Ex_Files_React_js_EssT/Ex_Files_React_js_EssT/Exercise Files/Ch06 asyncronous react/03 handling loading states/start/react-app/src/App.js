import "./App.css";
import { useState, useEffect } from "react";

function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location}</p>
      <img src={avatar} height={150} alt={name} />
    </div>
  );
}

function App() {
  //our data can have different states, it can be loading (data is fetching  but it hasnt come back yet), it can be an error (something went wrong with the fetch request), or it can be a success state (we have the data)!
  const [data, setData] = useState(null); //this will be our "success" state
  const [loading, setLoading] = useState(false); //we are creating our loading stte. for now, we are setting it to false because we are not loading anything yet
  const [error, setError] = useState(null); //this will be our error state. for now, we are setting it to null because we don't have an error
  useEffect(() => {
    setLoading(true); //when we start fetching the data, we want to set the loading state to true because the data is not yet fetched
    fetch(
      `https://api.github.com/users/moonhighway`
    )
      .then((response) => response.json())
      .then(setData) //here we are setting the data to the data variable, which means our state is successful (we dont need an actual variable to say its sucessful if the data is loaded we will know whether or not it is)
      .then(() => setLoading(false)) //this will set the loading state back to false once the data is loaded
      .catch(setError); //this will set the error state to whatever the error is
  }, []);

  if (loading) return <h1>Loading...</h1>; //if the data is still loading, we will return a heading that says "Loading..."
  if (error) return <pre>{JSON.stringify(error)}</pre>; //if there is an error, we will return a pre tag with the error inside of it
  if (!data) return null; //this means that it was unsuccessful and we don't have any data, so we will return null
  return (
    <GithubUser
      name={data.name}
      location={data.location}
      avatar={data.avatar_url}
    />
  );
}

export default App;
