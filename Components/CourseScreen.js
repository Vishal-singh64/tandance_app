import { View,FlatList, ScrollView } from 'react-native'
import React from 'react'
import CourseBox from './Component/CourseBox'
import Courses from './student/BranchData.json'
import { ViewContainer,CourseName, CourseNameText } from './Component/ComponentStyles/CommonStyle'

export default function CourseScreen({route,navigation}) {

  const { getBranch } = route.params;
  console.log(getBranch)
  
  const nextScreen=(course)=>{
    navigation.navigate('Semester', {
      getcourse:course
    })
    console.log(course)
    }

  return (
    <ViewContainer>
 <FlatList
    data={Courses.Course[getBranch]}
    // keyExtractor={(key)}=>{console.log(key)}
    renderItem={({item})=>
    <CourseName activeOpacity={0.8}  onPress={()=>{nextScreen(item.courseName)}}>
    <CourseNameText size="28px">{item.BranchName}</CourseNameText>
    <CourseNameText size="68px">{item.courseName}</CourseNameText>
    </CourseName>
 
      }
    /> 
    </ViewContainer>
  )
}

