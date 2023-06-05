import { View, Text,FlatList, ScrollView } from 'react-native'
import React from 'react'
import { ViewContainer, SemesterBoxCompo, StudentCountBox,
  StudentHeader,StudentCount, CourseNameText,BranchNameText } from './Component/ComponentStyles/CommonStyle'
import Semester from './student/SemesterData.json'

export default function SemesterScreen({route,navigation}) {
  const { getcourse } = route.params;

  const nextScreen=(id,course)=>{
     navigation.navigate('Subject', {
      getid:id-1,
      getcourse:course,
    })
    }
  // console.log(Semester.Semester.CSE[0].Subjects)

  return (
    <ViewContainer>
   
    <FlatList
    data={Semester.Semester[getcourse]}
    renderItem={({item})=>
    <SemesterBoxCompo activeOpacity={0.8} onPress={()=>{nextScreen(item.id,getcourse)}}>
    <CourseNameText size='28px'>{getcourse}</CourseNameText>
    <BranchNameText size='20px'>{item.BranchName}</BranchNameText>
    <CourseNameText size='42px'>{item.Semester}</CourseNameText>
    <StudentCountBox>  
    <StudentCount size="68px">{item.StundentCount}</StudentCount>
    <StudentHeader>Students</StudentHeader>
    </StudentCountBox>
    </SemesterBoxCompo>
    }
    /> 
      
    </ViewContainer>
  )
}