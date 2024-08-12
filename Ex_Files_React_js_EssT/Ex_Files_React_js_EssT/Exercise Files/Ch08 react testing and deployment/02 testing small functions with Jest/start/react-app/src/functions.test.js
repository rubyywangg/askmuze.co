//in this file is where npm test will going to run the tests for the functions.js file
//create React App already has Jest installed, so we don't need to install it (Jest is a testing framework)

import { timesTwo } from './functions'; //import the function we want to test

//now let's write the test, "multiplies by two" is the name/description of the test, and the second argument is a function that will run the test
test('Multiplies By Two', ()=>{
    expect(timesTwo(4)).toBe(8); //expect the value of timesTwo(4) to be 8
}
);

//and now if you run npm test in the console, it should say that the test passed!