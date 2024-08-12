import "./App.css";
import {Link} from "react-router-dom"; //we are importing the Link component from the react-router-dom library
//here we are going to add links so that the user can simply click on the links without having to manually switch the website URL
function Home() {
  return (
    <div>
      <nav>
        <Link to = "/">Home</Link> {/*this is the link to the Home page*/}
        <Link to = "/about">About</Link> {/*this is the link to the About page*/}
        <Link to = "/contact">Contact</Link> {/*this is the link to the Contact page*/}
      </nav>
      <h1>My Website</h1>
    </div>
  );
}

export function About() {
  return (
    <div>
      <nav>
        <Link to = "/">Home</Link> {/*this is the link to the Home page*/}
        <Link to = "/about">About</Link> {/*this is the link to the About page*/}
        <Link to = "/contact">Contact</Link> {/*this is the link to the Contact page*/}
      </nav>
      <h1>About Us</h1>
    </div>
  );
}

export function Contact() {
  return (
    <div>
      <nav>
        <Link to = "/">Home</Link> {/*this is the link to the Home page*/}
        <Link to = "/about">About</Link> {/*this is the link to the About page*/}
        <Link to = "/contact">Contact</Link> {/*this is the link to the Contact page*/}
      </nav>
      <h1>Contact Us</h1>
    </div>
  );
}

export function App() {
  return <Home />;
}
