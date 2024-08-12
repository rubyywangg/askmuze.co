import "./App.css";
//when we are moving from component to component on a single page, we want to use something called react router to help with that

//lets make a fre functions that mimic a simple nav bar
function Home(){
  return <h1>Home</h1>
}

function About(){
  return <h1>About Us</h1>
}

function Contact(){
  return <h1>Contact Us</h1>
}

function App() {
  return  <Home />
}

export default App;
