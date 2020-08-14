# Javascript Calculator
For the fourth project of FreeCodeCamp Frontend Library Curriculum, we have to make a Javascript Calculator using any mix of technology such as HTML, Javascript, CSS, Bootstrap, SASS, React, Redux, and jQuery.

## Test/User Stories
1. My calculator should contain a clickable element containing an = (equal sign) with a corresponding id="equals".
2. My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine".
3. My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide".
4. My calculator should contain a clickable element containing a . (decimal point) symbol with a corresponding id="decimal".
5. My calculator should contain a clickable element with an id="clear".
6. My calculator should contain an element to display values with a corresponding id="display".
7. At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.
8. As I input numbers, I should be able to see my input in the element with the id of display.
9. In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.
10. When inputting numbers, my calculator should not allow a number to begin with multiple zeros.
11. When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.
12. I should be able to perform any operation (+, -, *, /) on numbers containing decimal points.
13. If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign). For example, if 5 + * 7 = is entered, the result should be 35 (i.e. 5 * 7); if 5 * - 5 = is entered, the result should be -25 (i.e. 5 x (-5)).
14. Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.
15. My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).

Note on Calculator Logic:  
It should be noted that there are two main schools of thought on calculator input logic: immediate execution logic and formula logic. Our example utilizes formula logic and observes order of operation precedence, immediate execution does not. Either is acceptable, but please note that depending on which you choose, your calculator may yield different results than ours for certain equations (see below example). As long as your math can be verified by another production calculator, please do not consider this a bug.  
  
We need to include the CDN link in the public\index.html file to be able to run the test in any environment we like. The example to include it:
```
<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>
```

## Live Demo on Codepen
https://codepen.io/jordyf15/full/BaogOGM

## Technology Used
1. HTML
2. CSS
3. Javascript
3. React version 16.13.1

## List of React Component

### App Component
The App component renders the Calculator component and also the div element that contain the information text. The App component is also the parent component of Calculator component

#### States
The App component doesn't have any state.

#### Functions
The App component doesn't have any function.

#### Renders
The App component renders the following elements:
1. The calculator component with its content.
2. A information div that that hold information of the project.

### Calculator Component
The Calculator component is where most of the project is created. This is the calculator along with its button and also operations.

#### States
The Calculator component have only 1 state.  
The display state is the current display of the calculator which display the input, operation and also result of the calculator.

#### Functions
The Calculator component have 6 functions, they are:
1. clickNumberInputs: This function will be called when the user inputted a number in the calculator and it will be added to the display state. 
2. clickNumber: This function will handle input number with certain conditions such as continuing from the previous operation or starting a new operation.
3. clickOperatorInputs: This function will be called when the user inputted a operator in the calculator and it will be added to the display state. 
4. clickOperator: This function will handle input operator with certain conditions such as continuing from the previous operation or starting a new operation.
5. clickClear: this function will clear the display state.
6. getResult: this function will get the result of the current operation and add it to the display state.

#### Renders
The Calculator component renders the following element:
1. A Display container div to hold the formula and result display of the calculator.
2. A Calculator container div to hold all of the button of the calculator.
3. A clear button(AC) that will call the clickClear function when clicked.
4. A equal button(=) that will call the getResult function when clicked.
5. Number buttons (0,1,2,3,4,5,6,7,8,9,.) that will call the clickNumber function when clicked.
6. Operator buttons (*,/,+,-) that will call the clickOperator function when clicked. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
