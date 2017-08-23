import React from 'react';
import { View, Text } from 'react-native';
import Axios from 'axios';

// const AlbumList = () => { //functional declaration
class AlbumList extends React.Component {   //refactor to class declaration
  state = { albums: [] };


  componentWillMount() {
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data })); //pass the object to setState function
  }
  
  render() {
    console.log(this.state);
    return (
    <View>
      <Text>Album List</Text>
    </View>
    );  
  }
}

export default AlbumList;
