import React from 'react'
import { BoxContainer, BranchName } from './ComponentStyles/CommonStyle'

export default function BranchBox(props,{navigation}) {
  return (
    <BoxContainer onPress={()=>{console.log(props.branch)}}>
    <BranchName>{props.branch}</BranchName>
    </BoxContainer>
  )
}