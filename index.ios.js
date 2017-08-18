//ios code

//import a library to help create a component
import React from 'react'; //how the component should behave
import { AppRegistry } from 'react-native'; //take output from component and display it
import Header from './src/components/header';

//create a component
const App = () => {
  return (
      <Header />
  );
};

//render it to the device
AppRegistry.registerComponent('albums', () => App);
