import "./App.css";
import { useState } from "react";

//creating our own custom hooks! (which will be created using function)
function useInput(initialValue) { //hooks should always start with "use"
  const [value, setValue] = useState(initialValue); //this is a controlled component, the value attribute of a form element is tied directly to a piece of state in your React component. When the state changes, the value attribute updates accordingly, causing the form element to reflect the new state
  return [ //this returns 2 items(it returns an array so it uses array destructuring to assign which value goes where)
    { value, onChange: (e) => setValue(e.target.value) },//we need to return the value and the onChange event handler (returns the latest updated value)
    //in this next function, this creates a fuction to reset, but is not executed immediately. instead it is returned as a reference to a function that can be called whenever needed
    () => setValue(initialValue) //this is a function that will reset the value to the initial value (this method is only called when you explicitly call it)
  ];
}
/*
HOW TO ABOVE RETURN WORKS:
  - useInput takes in an initial value
  - useState is called with the initial value and since useState automatically returns an array with 2 items, we can destructure the array into value and setValue
  - the first item in the array is an object that contains the value and an onChange event handler
  - however, instead of returning the 2 values from the array from useState directly, useInput is going to replace these values and return a custom array that contains the value and an onChange event handler
  - it will still use array destructuring to assign the value and the onChange event handler to the first item in the array and the reset function to the second item in the array

*/

function App() {
  const [titleProps, resetTitle] = useInput("");//we are using the custom hook here
  const [colorProps, resetColor] = useInput("#000000");
  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps.value}`);
    resetTitle();
    resetColor();
  };
  return (
    <form onSubmit={submit}>
      <input
        {...titleProps} //this is a spread operator, it will spread the properties of the titleProps object into the input element
        type="text"
        placeholder="color title..."
      />
      <input
        {...colorProps}
        type="color"
      />
      <button>ADD</button>
    </form>
  );
}

export default App;
