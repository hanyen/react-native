//ios code

//import a library to help create a component
import React from 'react'; //how the component should behave
import { AppRegistry, View } from 'react-native'; //take output from component and display it
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create a component
//http://rallycoding.herokuapp.com/api/music_albums
const App = () => {
  return (
      <View>
        <Header headerText={'Albums'} />
        <AlbumList />
      </View>
  );
};

//render it to the device
AppRegistry.registerComponent('albums', () => App);
