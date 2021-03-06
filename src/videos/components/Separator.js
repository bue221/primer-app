import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Separator = (props) => {
  return (
    <View
      style={[
        styles.separator,
        {
          borderTopColor: props.color || '#eaeaea',
          marginLeft: props.horizontal ? 10 : 0,
        },
      ]}></View>
  );
};

const styles = StyleSheet.create({
  separator: {
    borderTopWidth: 1,
  },
});

export default Separator;
