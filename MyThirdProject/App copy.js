import React from 'react';
import {Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hey my name is {props.name}, I am student in cis340</Text>
    </View>
  );
}

export default function MultiCoomp()
{return(
  <View style={{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <Text>Welcome to cis340 </Text>
      <Student name="West Gajan"/>
      <Student name="Jack smith"/>
      <Student name="jane gee"/>
      <Student name="ALexx Trey" />
    
  </View>
  );
}