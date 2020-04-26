import React, {Component, useState} from 'react';
import {Text, View, SectionList } from 'react-native';



export default StatesApp = () =>  {
  return (
    <View style={{flex: 5, paddingTop: 23}}>

      <SectionList
        sections={[title: 'A', data: ['Alabama', 'Alaska','Arizona']}
        sections={[title: 'C', data: ['California', 'Colorado',]}
        sections={[title: 'D', data: ['Delaware',]}
        sections={[title: 'F', data: ['Florida']}


        renderItem={({Item}) => <Text style={{padding: 30, fontSize: 30, height: 3}}> {item.key} </Text>}
        renderSection={({section}) => <Text style={{paddingTop: 4}}
        />
    </View>
  ;)
 }