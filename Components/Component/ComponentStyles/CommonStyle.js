import styled from "styled-components";


export const ViewContainer=styled.View`
justify-content: center;
align-items: center;
/* margin-top: 40px; */
/* margin: 20px; */
`

export const BoxContainer=styled.TouchableOpacity`

height: 180px;
width: 154px;
border-radius: 18px;
background-color: #4285F4;
margin: 20px;
`

export const BranchName=styled.Text`
color: white;
font-weight: bold;
font-size: 24px;
margin:20px;
`

export const CourseName=styled.TouchableOpacity`
height: 160px;
width: 360px;
background-color: #4285F4;
border-radius: 18px;
border: 5px solid white;
margin-top: 20px;
`
export const CourseNameText=styled.Text`
color: white;
margin-left: 15px;
font-size: ${props=>props.size};
font-weight: bold;
padding: 5px;
`
export const BranchNameText=styled.Text`
color: white;
margin-left: 20px;
font-size: ${props=>props.size};
font-weight: bold;
`

export const SemesterBoxCompo=styled.TouchableOpacity`
height: 140px;
width: 360px;
border-radius: 18px;
background-color: #4285F4;
margin: 20px;
`
export const StudentCountBox=styled.View`
flex: 1;
position: absolute;
right: 0px;
border-top-right-radius: 18px;
border-bottom-right-radius: 18px;
height: 140px;
width: 130px;
background-color: #4663BE;
font-size: ${props=>props.size}
`
export const StudentHeader=styled.Text`
font-size: 28px;
margin: 5px;
color:white;
font-weight:bold;
position: absolute;
bottom: 20px;
`
export const StudentCount=styled.Text`
font-size: ${props=>props.size};
margin: 5px;
color: white;
font-weight: bold;
position: absolute;
top: 5px;
`

