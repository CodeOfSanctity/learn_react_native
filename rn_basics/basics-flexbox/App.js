import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    // flow direction - 'row' 'row reverse' default: 'column'
    // alignItems - default: 'stretch'
    // flex number is for children along main axis, relative number
    <View style={{ 
        padding: 50, 
        flexDirection: 'row', 
        width: '100%', 
        height: 300,
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
      <View
        style={{
          backgroundColor: 'red',
          flex: 1,
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          flex: 1,
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          flex: 1,
          width: 100,
          height: 100,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>3</Text>
      </View>
    </View>
  );
}
