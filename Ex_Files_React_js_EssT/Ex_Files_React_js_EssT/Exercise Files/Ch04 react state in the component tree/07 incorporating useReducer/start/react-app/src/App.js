import "./App.css";
import { useReducer } from "react";

function App() {
  //this is a way of using a checkbox toggler using useState
  // const [checked, setChecked] = useState(false); //create a new state variable called checked, and a function to update it called setChecked, the default value is false
  // return (
  //   <div className="App">
  //     <input type = "checkbox" value = {checked} onChange = {() => setChecked((checked) => ! checked)}/> {/*this is a checkbox, the value is the checked state variable, and the onChange event is going to call the setChecked function with the opposite value of the checked state variable*/}
  //     <label>{checked ? "checked" : "not checked"}</label> {/*the label (words beside the checkbox) will cgeck s the state is checked, if it is, returns "checked" and if not returns "not checked " --> uses the ternary operator (shorthand if statement)*/}
  //   </div>
  // );


  //but a better way todo this is useReducer (One purpose of the `useReducer` Hook is to prevent hardcoding by encapsulating code that processes user input into a new function.)
  const [checked, setChecked] = useReducer(checked => !checked,false); //the useReducer function takes a function as an argument (first argument to useReducer is a reducer function, which specifies how the state should change in response to actions), and the second argument is the initial state
  return (
    <div className = "App">
      {/*value attribute is usually used in a controlled component, the value attribute of a form element is tied directly to a piece of state in your React component. When the state changes, the value attribute updates accordingly, causing the form element to reflect the new state*/}
      <input type = "checkbox" value = {checked} onChange = {setChecked}/> {/*this is a checkbox, the value is the checked state variable, and the onChange event is going to call the setChecked function with the opposite value of the checked state variable*/}
      <label>{checked ? "checked" : "not checked"}</label> {/*the label (words beside the checkbox) will cgeck s the state is checked, if it is, returns "checked" and if not returns "not checked " --> uses the ternary operator (shorthand if statement)*/}
    </div>
  )
  /*HOW THIS WORKS:
  you have a reducer function that takes the current state and defines how the state should be updated based on the action that is dispatched (dispatch function), in this case it is checked => !checked.
  the dispatch function, which is the function used to trigger a state update (in this case is the setChecked function), will call the reducer function with the current state, and then the reducer function will return the new state, and then the new state will be used in the component
  */
}

export default App;
