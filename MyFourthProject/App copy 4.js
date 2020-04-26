import React, {Component, useState} from 'react';
import {Text, View, FlatList } from 'react-native';



export default StatesApp = () =>  {
  return (
    <View style={{flex: 5, paddingTop: 23}}>

      <FlatList
        data={[
          {key: 'Alabama'}
          {key: 'Alaska'},
          {key: 'Arizona'},
          {key: 'Arkansas'},
          {key: 'California'},
          {key: 'Colorado'},
          {key: 'Delaware'},
          {key: 'Florida'},
          {key: 'Georgia'},
          {key: 'Hawaii'},
        ]}

        renderItem={({Item}) => <Text style={{padding: 30, fontSize: 30, height: 3}}> {item.key}

        </Text>}

/>
    </View>



  ;)

  

 }