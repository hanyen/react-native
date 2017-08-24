import React from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

const AlbumDetail = (props) => {
  return (
  <Card>
    <Text>Title: {props.album.title}</Text>
    <Text>Artist Name: {props.album.artist}</Text>
  </Card>);
};

export default AlbumDetail;
