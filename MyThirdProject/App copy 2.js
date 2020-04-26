import React from 'react';
import {Text, View, Image } from 'react-native';

export default function CatApp() {
  let pic ={uri: "https://i.guim.co.uk/img/media/20098ae982d6b3ba4d70ede3ef9b8f79ab1205ce/0_0_969_1005/master/969.jpg?width=1920&quality=85&auto=format&fit=max&s=4526520402b1221a2b5a3f06c8034403g"};
  
  return (
      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>>
      <Image source={pic}
        style={{width: 200, height:200}}
      />
        <Text> hi i am your cat</Text>
    </View>
  );
}
