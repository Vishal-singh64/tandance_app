import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer, StackActions} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import BranchScreen from './Components/BranchScreen';
import CourseScreen from './Components/CourseScreen';
import LoginScreen from './Components/LoginScreen';
import SemesterScreen from './Components/SemesterScreen';
import SubjectScreen from './Components/SubjectScreen';
import SwipeScreen from './Components/SwipeScreen'
import Timage from './Components/Component/Timage'
// import ModalTester from './Components/student/modalPractice';


export default function App() {

  const Stack =createStackNavigator();

  return (


      <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'  screenOptions={{
        headerStyle: {
          backgroundColor: '#4285F4',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name='Login' 
       
         component={LoginScreen}/>
        <Stack.Screen name='Branch' component={BranchScreen}/>
        <Stack.Screen name='Course' component={CourseScreen}/>
        <Stack.Screen name='Semester' component={SemesterScreen}/>
        <Stack.Screen name='Subject' component={SubjectScreen}/>
        <Stack.Screen name='Swipe' component={SwipeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
   
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
