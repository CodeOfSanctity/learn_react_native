import React, { useState } from 'react';
import './NewGoal.css';

const NewGoal = (props) => {
    const [enteredText, setEnteredText] = useState('');

    const addGoalHandler = (event) => {
        event.preventDefault();

        const newGoal = {
            // This is NOT unique
            id: Math.random().toString(),
            text: enteredText
        }
        setEnteredText('');
        props.onAddGoal(newGoal);
    }

    const textChangeHandler = (event) => {
        setEnteredText(event.target.value);
    }

    // User Input & Two-Way Binding
    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type="text" value={enteredText} onChange={textChangeHandler} />
            <button type="submit">Add Goal</button>
        </form>
    );
};

export default NewGoal;