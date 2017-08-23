import React from 'react';
import { View, Text } from 'react-native';
import Axios from 'axios';

// const AlbumList = () => { //functional declaration
class AlbumList extends React.Component {   //refactor to class declaration
  state = { albums: [] };


  componentWillMount() {
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(response => this.setState({ albums: response.data })); //pass the object to setState function
  }
  
  renderAlbums() {
    return this.state.albums.map(album => <Text>{album.title}</Text>);
  }

  render() {
    // console.log(this.state);
    return (
    <View>
      {this.renderAlbums()}
    </View>
    );  
  }
}

export default AlbumList;
