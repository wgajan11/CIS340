import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.yello}>Just yello text!</Text>
      <Text style={styles.largGreen}>this is latge green </Text>
      <Text style={[styles.yello, styles.largGreen]}>yellow and latge green </Text>
      <Text style={[styles.largGreen ,styles.yello ]}>green then yellow </Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    marginTop: 60,
    
  },
  largGreen:{
    color: 'green',
    fontWeight: "bold",
    fontSize: 20,
  },

  yello: {
    color: 'yellow',
    fontSize: 10
  }




}
);

