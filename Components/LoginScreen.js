import { View, Text,TouchableOpacity, TouchableNativeFeedbackComponent, Touchable, TouchableHighlightBase } from 'react-native'
import React from 'react'
import { FaBeer } from 'react-icons/fa';
import Icons from 'react-native-vector-icons/AntDesign'
import { LoginContainer, LogoHolder, SignInButton } from './Screens/ScreenStyles/LSStyle'
import { TouchableHighlight } from 'react-native-gesture-handler';

export default function LoginScreen({navigation}) {
  return (
    <LoginContainer>
      <LogoHolder>
      <Text style={{color:"white",fontSize:48}}>Tandance</Text>
      </LogoHolder>
      <SignInButton onPress={()=>{navigation.navigate("Branch")}}>
        <Text><Icons name='google' size={18}/> Google</Text>
      </SignInButton>
    </LoginContainer>
    
  )
}