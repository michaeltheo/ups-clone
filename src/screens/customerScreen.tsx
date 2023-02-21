import {  StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';

export default function CustomerScreen() {
    const tw  = useTailwind();
  return (
    <View>
      <Text style={tw('text-red-500')}>customerScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
})