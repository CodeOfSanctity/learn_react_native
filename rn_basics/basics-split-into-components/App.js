import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList
} from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

/* 
Flexbox notes
flow direction - 'row' 'row reverse' default: 'column'
alignItems - default: 'stretch'
flex number is for children along main axis, relative number
*/

/* 
Other notes
padding is spacing between border and content
margin is spacing between border and surrounding content
*/

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle }
    ]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  // FlatList handles possibly infinite lists more efficiently (doesn't render everything)
  // Slight differences also include
  // renderItem is similar to map, don't need key and accessing itemData props
  // Expects list of objects, so for arrays we need to declare the key in keyExtractor
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={itemData => <GoalItem 
          onDelete={removeGoalHandler}
          id={itemData.item.id}
          title={itemData.item.value} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});
