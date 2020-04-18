import React, {useState} from 'react';
import {Text, View, Image, Button } from 'react-native';

function TV(props) {

  const[isOff, setIsOff] = useState(true);

  return(
    <View>
      <Text>
        {"\n\n\n\n\n"}
        This is {props.name} TV, and it is {isOff ? "Off" : " Turned On"}!
              </Text>
              <Button
                onPress={() => {
                  setIsOff(false);

                }}
                disabled={!isOff}
                title={isOff ? "turn me on" : "thank you"}
                />
    </View>
  );

}
export default function MultiTVs(){
  return(
    <View>
      <TV name="LG" />

    </View>
  );
}
