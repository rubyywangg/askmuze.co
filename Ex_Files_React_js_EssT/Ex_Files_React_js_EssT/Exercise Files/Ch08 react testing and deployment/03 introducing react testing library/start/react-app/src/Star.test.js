//remember that Jest is going to run any of these test files that have the .test.js extension

import { render }from "@testing-library/react"; //this import is going to give us the render function for testing
import { Star } from "./Star"; //this import is going to give us the Star component that we are going to test

test("renders an h1", () =>{
    //render(<Star />): This function call renders the Star component into a virtual DOM
    //const { getByText } is a way to extract the getByText function from the object returned by render. this is destructuring becuase it allows you to extract properties from objects and arrays (in this case its an object)
    //getByText("Cool Star") is a function that is going to look for an element with the text "Cool Star" in the virtual DOM
    const {getByText} = render(<Star />); 
    const h1 = getByText(/Cool Star/); //now we are using the getByText function to look for an element with the text "Cool Star"
    expect (h1).toHaveTextContent("Cool Star"); //this line is going to check if the h1 element has the text "Cool Star"
})