import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
		<View style={{
				flexDirection: 'row', 
				justifyContent: 'space-between', 
				alignItems: 'center'
			}}>
			<TextInput placeholder="Course Goal" style={{
				width: '80%',
				borderColor: 'black',
				borderWidth: 1,
				padding: 10
			}}></TextInput>
			<Button title="ADD"></Button>
		</View>
		
		<View>
			
		</View>

		<StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50
  },
});

