//another important part of tests is testing events that are part of components
import { useReducer } from "react";

export function Checkbox() {
  const [checked, setChecked] = useReducer((checked) => !checked, false);
  return (
    <>
      <label htmlFor="checked">
        {" "}
        {/*if you dont' include the htmlFor, it will cause an error, because we need a way to associate the label with the input so that the computer will know which checkbox we want to toggle when we click it!*/}
        {checked ? "checked" : "not checked"}
      </label>
      <input
        id="checked" //notice that the id here matched the htmlFor in the label
        type="checkbox"
        value={checked}
        onChange={setChecked}
      />
    </>
  );
}
