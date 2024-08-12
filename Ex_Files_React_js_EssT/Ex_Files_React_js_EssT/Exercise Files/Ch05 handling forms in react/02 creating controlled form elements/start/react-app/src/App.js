import "./App.css";
import { useState } from "react"; //we can also use useState instead of useRef which will create a controlled component (a component that is controlled by the state)

function App() {
  const [title, setTitle] = useState(""); //create a state variable called title, and a function to update it called setTitle, the default value is an empty string
  const [color, setColor] = useState("#000000"); //create a state variable called color, and a function to update it called setColor, the default value is black
  const submit = (e) => {
    e.preventDefault();
    alert(`${title}, ${color}`);
    setTitle(""); //this sets the value of the input field for the title back to empty
    setColor("#000000"); //this sets the value of the input field for the color
  };
  return (
    <form onSubmit={submit}>
      <input
        value = {title} //this is a controlled component, the value attribute of a form element is tied directly to a piece of state in your React component. When the state changes, the value attribute updates accordingly, causing the form element to reflect the new state
        onChange = {(e) => setTitle(e.target.value)} //onChange event is going to call the setTitle function with the value of the input field (onChange event is triggered when the value of an element has been changed)
        type="text"
        placeholder="color title..."
      />
      <input
        value = {color}
        onChange = {(e) => setColor(e.target.value)}
        type="color"
      />
      <button>ADD</button>
    </form>
  );
}

export default App;
