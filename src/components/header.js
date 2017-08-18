//import libraries to make component
import React from 'react';
import { Text, View } from 'react-native';

//make components
const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>Albums!</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset:  { width: 0, height: 2},
    shadowOpacity: 0.2
  },
  textStyle: {
    fontSize: 20
  }
};

//make components available for other parts of the app
export default Header;
