//ios code

//import a library to help create a component
import React from 'react'; //how the component should behave
import { Text, AppRegistry } from 'react-native'; //take output from component and display it

//create a component
const App = () => {
  return (
    <Text>Some Text</Text>
  );
};

//render it to the device
AppRegistry.registerComponent('albums', () => App);
