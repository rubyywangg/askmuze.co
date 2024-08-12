import "./App.css";
import { useState, useEffect } from "react";
//now we will be using GraphQL, which is a way of creating an API where you can specify what data you want by using its field

//this is the query that we will be using to get the data from the API (note that allLifts is an array of objects that contain the name, status, and elevationGain of the lifts)
//note: a query is just a way of asking for data from an API, in this case, our query is specifically asking for the data for name, status and elevationGain of all the lifts
const query = ` 
  query {
    allLifts {
      name
      status
      elevationGain
    }
  }
`;

//this is the options object that we will be using to fetch the data from the API (e.g. the method is POST (which specified the HTTP method), the headers are set to "Content-Type: application/json" (defines the headers to be in JSON format), and the body is set to the query that we want to use(we are stringifying the query because we want to convert the query into a string))
const opts = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ query }),
};


//this is the Lift function, each lift will have a name, elevationGain, and status and each of these lists lie inside the allLifts array
function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{elevationGain} {status}</p>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://snowtooth.moonhighway.com/`, opts //this is the api that we are fetching the data from
    )
      .then((response) => response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  if (loading) return <h1>Loading...</h1>;
  if (error)
    return <pre>{JSON.stringify(error)}</pre>;
  if (!data) return null;
  return (
    //NOTE: usually when we rendering lists of elements, we use a key prop to uniquely identify each element in the list (this is because React uses the key prop to determine which elements have changed, are added, or are removed). however, here we did not use a key prop because we are not changing the data in any way (we are just fetching the data and displaying it)
    <div> {/*we need to put this all in a div when we are looping thru an array of lifts (which is a component), we need to wrap it in a div because recall that JSX requires that component return a single root element(in other words, JSX and React is tempted to only render one component, which is usually why we sometimes have App.js to envelope everything and just render App.js)*/}
      {data.data.allLifts.map((lift) => ( //this is a map function that will loop through all the lifts in the allLifts array and return a Lift component for each lift (note: data.data.allLists is the array of all the lifts, it just so happens to be one of those keys inside another key called data)
        <Lift
          name = {lift.name} 
          elevationGain = {lift.elevationGain}
          status={lift.status}
        />
      ))}
    </div>
  );
}

export default App;
