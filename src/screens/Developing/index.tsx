import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function Developing() {
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        {justifyContent: 'center', alignItems: 'center'},
      ]}>
      <Text>Em desenvolvimento...</Text>
    </View>
  );
}
