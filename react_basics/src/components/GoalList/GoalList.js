import React from 'react';

/*
Notes
1) props is an arguments object passed from previous component
2) {} between tags to use props attributes
3) map() is used to iterate over an array and manipulate or change data items
4) map() is most commonly used for rendering a list of data to the DOM
*/
const GoalList = (props) => {
    console.log(props.goals)
    return ( 
        <ul className="goal-list">
            {props.goals.map((goal) => {
                return <li key={goal.id}>{goal.text}</li>
            })}
        </ul>
   );
};

export default GoalList;