import "./App.css";

//example destructuring with arrays:
const cities = ["New York", "London", "Paris"]; //create array
console.log(cities[0]) //unfortunatley, we cant go in and grab an cities array and get a property, like cities.name, because arrays dont have properties

//so instead we need to use a pattern alled array destrucutring:
const [city1, city2, city3] = ["Tokoyo", "Tahoe City", "Bend"]; //this is array destructuring, and it allows us to grab the values from the array and assign them to variables (e.g. city1 = "Tokoyo", city2 = "Tahoe City", city3 = "Bend")
console.log(city1) //Tokoyo
console.log(city2) //Tahoe City

// we are destructuring the prop --> essentially the prop object has a key called "library", which can be seen in index.js, and destructuring goes into the prop object and grabs the "library" key
function App({library}) { {/* This is where the library prop is destructured */}
  return (
    <div className="App">
      <h1>Hello from {library}</h1> {/* This is where the library prop is used */}
    </div>
  );
}

export default App;
