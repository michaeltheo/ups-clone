import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigatorTab from './NavigatorTab';


export type RootStackParamList={
    Main:undefined,
    MyModal:{
        userId:string,
        name:string
    },
    Order:{order:any}
}

const Stack = createNativeStackNavigator();
const RootNavigator = () => {
  return (
    <Stack.Navigator>
        <Stack.Group>
    <Stack.Screen name='main' component={NavigatorTab}></Stack.Screen>
        </Stack.Group>
    </Stack.Navigator>
  )
}

export default RootNavigator