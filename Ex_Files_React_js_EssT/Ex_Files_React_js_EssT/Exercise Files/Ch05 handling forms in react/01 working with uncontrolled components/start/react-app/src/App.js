import "./App.css";
import { useRef } from "react"; //now we are going to use useRef hook
//useRef is a hook that allows you to create a reference to a DOM/UI element, and then you can "reach into" that reference to access the DOM/UI element directly and get its value or change its value
//this is called an uncontrolled component (create a little container, give us the value of the input, but unlike useState which will rerender if there is some change, useRef will not rerender), we always have to reach out to figure out what the value is


/*
NOTE: a button that does not have a type attribute will default to type="submit", so if you have a button inside a form, and you click it, it will submit the form

if you have multiple buttons, but only want one of them to have the submit button, you can add the type="submit" attribute to the button you want to be the submit button and a type of smth else to the other button(s). 
e.g. 
<form id="myForm">
  <button type="submit">Submit</button>
  <button type="button" onclick="alert('This button does not submit the form')">Do Not Submit</button>
</form>
*/

function App() {
  const txtTitle = useRef(); //create a reference to the input field for the title
  const hexColor = useRef(); //create a reference to the input field for the color

  const submit = (e) => { 
    e.preventDefault(); //since we have a button (ADD) that is a default submit function, we need to remmeber that submit buttons have a default of reloading the page. we don't want to do that here! so this is a method (.preventDefault) that prevents the default action of the form
    const title = txtTitle.current.value; //.current.value allows u to make changes/do anything with the current value of the input field
    const color = hexColor.current.value; //.current.value allows u to make changes/do anything with the current value of the input field
    alert(`${title}, ${color}`); //this is an alert(one of those tabs that pop up at the top) that will pop up with the title and color that was inputted
    //after the form is submitted, we want to set the value of the input fields back to empty
    txtTitle.current.value = ""; //this sets the value of the input field for the title back to empty
    hexColor.current.value = ""; //this sets the value of the input field for the color back to empty
  }
  return (
    <form onSubmit = {submit}> {/*we added a onSubmit handler and passed in the submit functionw e created abvove. so now every time the form is submitted, it will do whatever is in the submit function*/}
    {/*the ref attribute is used to create a reference to the input field, so its matched with the constant above so that we are able to retrieve the value that has been inputted*/}
      <input ref = {txtTitle} type="text" placeholder="color title..." /> {/*this is an input field, takes in text, and the default text is "color title..."*/}
      <input ref = {hexColor} type="color" /> {/*this is an input field, takes in color, and the default color is white*/}
      <button>ADD</button> {/*this is a button, and the text on the button is "ADD", and since it doesnt have a type, the button is defaulted to be a type = "submit" button*/}

    </form>
  );
}

export default App;
