import { View, Text,FlatList } from 'react-native'
import React from 'react'
import SubjectBox from './Component/SubjectBox'
import Semester from './student/SemesterData.json'

import { CourseNameText, SemesterBoxCompo, StudentCount, StudentCountBox, StudentHeader } from './Component/ComponentStyles/CommonStyle'


export default function SubjectScreen({route,navigation}) {

  const { getid,getcourse } = route.params;
  const nextScreen=(id,course)=>{
    navigation.navigate('Swipe')
  console.log(getid,getcourse)
  }

  return (

    <FlatList
    data={Semester.Semester[getcourse][getid].Subjects}
    key={(key)=>{console.log(key.id)}}
    renderItem={({item})=>
    <SemesterBoxCompo activeOpacity={0.8} onPress={()=>{nextScreen(getid,getcourse)}}>
    <CourseNameText size='28px'>{item.SubjectTeacher}</CourseNameText>
    <CourseNameText size='42px'>{item.SubjectName}</CourseNameText>
    <StudentCountBox>  
    <StudentCount size="68px">{item.StundentCount}</StudentCount>
    <StudentHeader>Students</StudentHeader>
    </StudentCountBox>
    </SemesterBoxCompo>
    }
    /> 
  
  )
}

