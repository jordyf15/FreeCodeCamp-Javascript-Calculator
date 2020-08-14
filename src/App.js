import React from 'react';
import './App.css';
import Calculator from './Calculator';

class App extends React.Component{

  render(){
    return(
      <div>
        <Calculator/>
        <div id="information">Recreated from <a href="https://www.freecodecamp.org/no-stack-dub-sack">Peter Weinberg's</a> Javascript Calculator<br/>
        By <a href="https://www.freecodecamp.org/jordyf">Jordy Ferdian</a> for Practice and <a href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator">FreeCodeCamp Test Project</a>
        </div>
      </div>
    )
  }
}

export default App;
