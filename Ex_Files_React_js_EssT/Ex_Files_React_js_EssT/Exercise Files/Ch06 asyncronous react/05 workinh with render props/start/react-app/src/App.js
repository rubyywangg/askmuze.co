import "./App.css";
import { useState, useEffect } from "react";

//now we'll be exploring data loading but with how to use functions to display the right data at the right time!

const tahoe_peaks = [
  //lets start by creating an array of objects that contain the name and elevation of the peaks
  { name: "Freel Peak", elevation: 10891 },
  { name: "Monument Peak", elevation: 10067 },
  { name: "Pyramid Peak", elevation: 9983 },
  { name: "Mt. Tallac", elevation: 9735 },
];

//this is a List component that takes in data, renderItem, and renderEmpty as props
//the data property is the data that we want to display, the second property is the renderItem function that will render the data(however, the renderItem will help us render INDIVIDUAL list items), and the third property is the renderEmpty function that will render if the data is empty
function List({ data, renderItem, renderEmpty }) {
  //if the data is empty, we will render the renderEmpty function, otherwise we will map over the data and render the renderItem function
  return !data.length ? (
    renderEmpty
  ) : (
    //if the data is NOT empty, we will create an unordered list and map over the data and return a list item for each item in the data array, we are giving this list a key(goos standard) and we are calling the renderItem function for each item in the data array
    <ul>
      {data.map((item) => (
        <li key={data.name}> {renderItem(item)}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <List
      data={tahoe_peaks}
      renderEmpty={<p>This is an empty list.</p>} //here we are telling the List component that if the data is empty, we want to render a paragraph that says "This is an empty list." this is essentially a fallback for when the data is empty and is telling the code what to do when the renderEmpty function is called
      //likewise, we are telling the List component that if the data is NOT empty, we want to render the name and elevation of each peak by setting the renderItem function to perform the code below
      renderItem={(item) => (
        <>
          {" "}
          {/*this is using the shorthand version of React.Fragment (which is <>...recall that React.Fragment is used when we want to group multiple element together without adding extra nodes in the DOM) to render the name and elevation of each peak*/}
          {item.name} - {item.elevation} ft
        </>
      )}
    />
  );
}

export default App;
