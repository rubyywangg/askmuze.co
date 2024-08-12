import {render, fireEvent} from "@testing-library/react"; //FireEvent is a function that is going to simulate events on the DOM
import {Checkbox} from "./Checkbox";

test("Selecting checkbox should change value to true", ()=>{
    const {getByLabelText} = render (<Checkbox />);
    const checkbox = getByLabelText(/not checked/i); //the i at the end gets rid of case sensitivity so that "NOT CHECKED", "Not Checked" and "not checked", etc. are the same
    fireEvent.click(checkbox); //so FireEvent here is use to simulate what it would be like to click the checkbox without actually clicking it
    expect(checkbox.checked).toEqual(true); //now when the FireEvent is called, we expect the checkbox to be checked
})