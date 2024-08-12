import "./App.css";

function Home() { //doesnt need to be exported because it is being used in the App function and the App function is being exported
  return (
    <div>
      <h1>My Website</h1>
    </div>
  );
}

//first we need to export all our functions so we can use them in index.js where they will be rendered
export function About() {
  return (
    <div>
      <h1>About Us</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
    </div>
  );
}

export function App() {
  return <Home />;
}

