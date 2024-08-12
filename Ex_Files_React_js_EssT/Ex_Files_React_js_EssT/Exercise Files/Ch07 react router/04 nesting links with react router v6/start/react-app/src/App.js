import "./App.css";
import { Link, Outlet } from "react-router-dom"; //think of Outlet as a placeholder for nested routes (its essentially a container that will hold our History page)
//now we're going to explore nested links within our routes
function Home() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>My Website</h1>
    </div>
  );
}

//lets create a new page called history which we want nested in the About page
export function History() {
  return (
    <div>
      <h2>Our History</h2>
    </div>
    
  );
}

export function About() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="history">History</Link> {/*this is the link to the History page*/}
      </nav>
      <h1>About Us</h1>
      <Outlet /> {/*this is the placeholder for the nested routes, essentially you use <Outlet> to define where the nested route's components should appear in the layout of the parent route.*/}
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Contact Us</h1>
    </div>
  );
}

export function App() {
  return <Home />;
}
