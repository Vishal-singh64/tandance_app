import { View, Text,Image } from 'react-native'
import React from 'react'

export default function Timage() {
  return (
    <View>
     <Image source={require('../../assets/images/1.jpeg')}/>
     {/* <img src='../../assets/images/test1.png'/> */}
    </View>
  )
}
