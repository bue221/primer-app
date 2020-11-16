import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Suggestion = (props) => {
  //console.log(props);
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image style={styles.cover} source={{uri: props.medium_cover_image}} />
        <View style={styles.containerGenre}>
          <Text style={styles.genre}>Genero: {props.genres[0]}</Text>
        </View>
      </View>
      <View style={styles.right}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.year}>año: {props.year}</Text>
        <Text style={styles.starts}>Rating: {props.rating}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  cover: {
    height: 150,
    width: 100,
    resizeMode: 'contain',
  },
  right: {
    paddingLeft: 10,
    //justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    color: '#44546b',
  },
  year: {
    backgroundColor: '#70b124',
    paddingVertical: 4,
    color: 'white',
    fontSize: 11,
    textAlign: 'center',
    borderRadius: 5,
    width: 100,
    //overflow: 'hidden',
  },
  starts: {
    color: '#6b6b6b',
    fontSize: 14,
    fontWeight: 'bold',
  },
  containerGenre: {
    position: 'absolute',
    left: 0,
    top: 0,
    backgroundColor: 'black',
  },
  genre: {
    color: 'white',
  },
  left: {},
});

export default Suggestion;
