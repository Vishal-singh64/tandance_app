import { View, Text } from 'react-native'
import React from 'react'
import { CourseNameText, SemesterBoxCompo, StudentCount, StudentCountBox, StudentHeader } from './ComponentStyles/CommonStyle'




export default function SubjectBox(props) {
  return (
    <SemesterBoxCompo>
    
    <CourseNameText size='28px'>{props.BranchName}</CourseNameText>
    <CourseNameText size='42px'>{props.Semester}</CourseNameText>
    {/* <CourseNameText size='24px'>st</CourseNameText></CourseNameText> */}
    <StudentCountBox>  
    <StudentCount size="68px">{props.Count}</StudentCount>
      <StudentHeader>Students</StudentHeader>
    </StudentCountBox>
    </SemesterBoxCompo>
    )
}