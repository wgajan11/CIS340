import React, {Component, useState} from 'react';
import {Text, View, TestInput, TextInput } from 'react-native';

export default function WordConvertpr() {
const [text, setTet]=useState('');
return(
  <View styles = {{padding: 40}}>
    <TextInput
    style={{height: 40}}
    placeholder='Input text'
    onChangeText={text => setText(text)}
    defaultValue={text}
     />
     <Text style={{padding: 10, fontSize: 42}}>
       {text.split(' ').map((word) => word && '*').join(' ')}

     </Text>

    
      </View>
    );
  }



