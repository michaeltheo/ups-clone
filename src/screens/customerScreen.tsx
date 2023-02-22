import {   ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useTailwind } from 'tailwind-rn/dist';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamsList } from '../navigator/NavigatorTab';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigator/RootNavigator';
import { Image, Input } from '@rneui/base';


export type CustomerScreenNavigationProp= CompositeNavigationProp <BottomTabNavigationProp <TabStackParamsList,"Customer">,NativeStackNavigationProp<RootStackParamList>>

export default function CustomerScreen() {
    const tw  = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();
  const [input,setInput]= useState<string>("")

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false
    })
  },[])

  return (
    <ScrollView style={{backgroundColor:"#59C1CC"}}>
      <Image
      source={{uri:"https://links.papareact.com/3jc"}}
      containerStyle={tw("w-full h-64")}
      PlaceholderContent={<ActivityIndicator/>}
      />
      <Input
      placeholder='Search by Customer name..'
      value={input}
      onChangeText={setInput}
      containerStyle={tw('bg-white pt-5 pb-0 px-10')}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  
})