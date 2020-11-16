import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

const CategoryLayout = (props) => {
  return (
    <ImageBackground
      source={require('../../../assets/backgronund.png')}
      style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      {props.children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    color: '#4c4c4c',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default CategoryLayout;
