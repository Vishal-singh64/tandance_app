import { View, Text } from 'react-native'
import React from 'react'
import { CourseName, CourseNameText } from './ComponentStyles/CommonStyle'

export default function CourseBox(props,{navigation}) {
  return (
    <CourseName onPress={()=>{navigation.navigate('BranchScreen')}}>
    <CourseNameText size="28px">{props.BranchName}</CourseNameText>
    <CourseNameText size="68px">{props.CourseName}</CourseNameText>
    
    </CourseName>
  )
}