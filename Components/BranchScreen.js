import { View, Text, FlatList,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import BranchBox from './Component/BranchBox'
import Branch from './student/data.json'
import { createGlobalStyle } from 'styled-components'
import createPerformanceLogger from 'react-native/Libraries/Utilities/createPerformanceLogger'
import { ViewContainer,BoxContainer, BranchName } from './Component/ComponentStyles/CommonStyle'
import { ScrollView } from 'react-native-gesture-handler'
import axios from 'axios'
// import { DrawerItem } from '@react-navigation/drawer'


export default function BranchScreen({navigation}) {

  // const [branch, setbranch] = useState()

  const nextScreen=(value)=>{
    navigation.navigate('Course', {
      getBranch:value,
    });
    // navigation.navigate("Course");
  }
  // var ApiUrl='https://192.168.1.196/api/connect.php';
  // var headers={
  //   'Accept':'application/json',
  //   'Content-Type':'application.json'
  // }; 
  // var data={
  //   name:'vishal'
  // }
  // fetch('https://192.168.1.196:80/api/connect.php')
  // .then(response => JSON.stringify(response))
  // .then(json => {
  //   return console.log(json)
  // })
  // .catch(error => {
  //   console.error(error);
  // });

  return (
    <View>
    <ScrollView horizontal={true}>
    <BoxContainer activeOpacity={0.8}  onPress={()=>{nextScreen('Btech')}}>
    <BranchName>Btech</BranchName>
    </BoxContainer>
    <BoxContainer activeOpacity={0.8} onPress={()=>{nextScreen('BCA')}}>
    <BranchName>BCA</BranchName>
    </BoxContainer>
    
    </ScrollView>
    <ScrollView horizontal={true}>
   
    <BoxContainer activeOpacity={0.8} onPress={()=>{nextScreen('B.COM')}}>
    <BranchName>B.COM</BranchName>
    </BoxContainer>
    <BoxContainer activeOpacity={0.8} onPress={()=>{nextScreen('JMC')}}>
    <BranchName>JMC</BranchName>
    </BoxContainer>
    
    </ScrollView>
    {/* <FlatList
    data={Branch.Branch}
    numColumns={2}
    // keyExtractor={(key)}=>{console.log(key)}
    renderItem={({item})=>
      <BranchBox branch={item.BranchName}/>
    }
    />  */}
    </View>
  )
}
