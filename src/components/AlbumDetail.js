import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  return (
  <Card>
    <CardSection>
      <Text>Title: {props.album.title}</Text>
    </CardSection>
    <CardSection>
      <Text>Artist Name: {props.album.artist}</Text>
    </CardSection>
  </Card>);
};

export default AlbumDetail;
