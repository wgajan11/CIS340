import React, {Component, useState} from 'react';
import {Text, Image, ScrollView } from 'react-native';





const dog= {
  uri:'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/dog2.png',
  width:64,
  height: 64
}
export default function MyScrollViewApp() {

  

<ScrollView>
<Text style {{fontSize: 80}}> Try to scroll </Text>
  <Image source={dog} />
  <Image source={dog} />
  <Image source={dog} />
  <Image source={dog} />
  <Image source={dog} />
  <Image source={dog} />
  <Image source={dog} />
  <Text style {{fontSize: 80}}> Try to scroll </Text> 
  <Image source={dog} />
  <Image source={dog} />
  <Image source={dog} />
  <Image source={dog} />
  <Image source={dog} />
  <Image source={dog} />
  <Image source={dog} />
 

</ScrollView>

 }