import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

/*
// Function component - Return JSX
const App = () => {
  return <h1 title="This works!">A React App!</h1>;
  // Top is syntatic sugar for below
  // return React.createElement('h1', {}, 'A React App');
};

// Class component - Return JSX
// Class component
// class App extends React.Component {
//   render() {
//     return <h1 title="This works!">A React App!</h1>;
//   }
// }
*/

// Props = properties and this allows us to pass data between components
// useState is used to tell React to manage state for a variable
// useState returns [state snapshot, function to update snapshot]
// useState will ignore useState and use latest snapshot on rerender
const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the course'},
    {id: 'cg2', text: 'Learn all about the Course Main Topic'},
    {id: 'cg3', text: 'Help other students in the Course Q&A'}
  ]);

  // Callback function to be executed by child
  const addNewGoalHandler = (newGoal) => {
    // concat gives a brand new array 
    // It is is NOT recommended to use snapshot declared outside for update
    // It is better to receive latest snapshot like below
    setCourseGoals((previousCourseGoals) => {
      return previousCourseGoals.concat(newGoal);
    });
  }

  return ( 
    <div className="course-goals">
      <NewGoal onAddGoal={addNewGoalHandler}/>
      <h2>Course Goals</h2>
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
