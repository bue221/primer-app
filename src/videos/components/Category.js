import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

const Category = (props) => {
  return (
    <ImageBackground source={{uri: props.background_image}} style={styles.wrap}>
      <Text style={styles.title}>{props.genres[0]}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  wrap: {
    width: 280,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 10,
  },
});

export default Category;
