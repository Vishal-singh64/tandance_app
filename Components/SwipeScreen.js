import { View, Text, FlatList,Image,Modal, TouchableOpacity,Alert, StyleSheet, Pressable  } from 'react-native'
import React,{useState} from 'react'
import StudentList from './student/StudentList.json';
import { Buttons, DataHolder, Picturecontainer, ButtonHolder,Screencontainer, 
  Picturedata,Box, ModalBtn, ModalBody, ModalInternal } from './Component/ComponentStyles/SwipeStyle';
  // import Modal from "react-native-modal";

export default function SwipeScreen() {

  const data=[
    {
      name:"Jack",
      rollno:1906161,
      image:require("../assets/images/1.jpeg"),
      mark:false
    },
    {
      name:"Timmy",
      rollno:1906162,
      image:require("../assets/images/2.jpeg"),
      mark:false
    },
    {
      name:"Buzo",
      rollno:1906163,
      image:require("../assets/images/3.jpeg"),
      mark:false
    },
    {
      name:"Pakun",
      rollno:1906164,
      image:require("../assets/images/4.jpeg"),
      mark:false
    },
    {
      name:"Shikimaru",
      rollno:1906165,
      image:require("../assets/images/5.jpeg"),
      mark:false
    },
    {
      name:"Tanzo",
      rollno:1906166,
      image:require("../assets/images/6.jpeg"),
      mark:false
    },
    {
      name:"Tuffy",
      rollno:1906167,
      image:require("../assets/images/7.jpeg"),
      mark:false
    },
    {
      name:"Jimmy",
      rollno:1906168,
      image:require("../assets/images/8.jpeg"),
      mark:false
    },
    {
      name:"Bozo",
      rollno:1906169,
      image:require("../assets/images/9.jpeg"),
      mark:false
    },
    {
      name:"Lilly",
      rollno:1906170,
      image:require("../assets/images/10.jpeg"),
      mark:false
    },
    {
      name:"",
      rollno:"",
      image:require("../assets/images/11.jpeg"),
      mark:false
    },

  ];

  const [modalVisible, setModalVisible] = useState(false);
const [yes, setYes] = useState(0);
const [no, setNo] = useState(0);
const [position, setPosition] = useState(0);
const [report, setReport] = useState([]);

const present = () => {
  
  if(position<data.length-1){
    setReport(prevReport => [...prevReport, { mark: 1, name: data[position].name }]);
    setPosition(prevPosition => prevPosition + 1);

  }else{

    count();
  }
};

const absent = () => {
  if(position<data.length-1){
    setReport(prevReport => [...prevReport, { mark: 0, name: data[position].name }]);
    setPosition(prevPosition => prevPosition + 1);

  }else{

    count();
  }
 
};


const back = () => {
  console.log('back');
};

const count = () => {
  setModalVisible(true);

  for(let i=0;i<data.length-1;i++){
    if(report[i].mark==1){
      setYes(yes=>yes+1)
    }else if(report[i].mark==0){
      setNo(no=>no+1)
    }
  }
  // console.log(report[0].name)
  // Additional logic for handling the count modal
};

 //////////////////////////////////////////////////////////////////////////////////////////////// 
  return (
<Screencontainer>

{/********************  Modal body ***************/}

<View>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <ModalBody>
            <ModalInternal>
            {/* **************Modal Total Count ****************/}
            <View style={{display:'flex',flexDirection:'row',margin:20,justifyContent:'center'}}>
            <View style={{margin:20,alignItems:'center'}}>
            <Text style={{color:"red",fontSize:48}}>{no}</Text>
            <Text style={{fontSize:28}}>Absent</Text>
            </View>

            <View style={{margin:20,alignItems:'center'}}>
            <Text style={{color:"red",fontSize:48}}>{yes}</Text>
            <Text style={{fontSize:28}}>Present</Text>
            </View>
            </View>

            {/* **************Modal Total Count ****************/}


            {/* **************Modal Buttons ****************/}
            <View style={{display:'flex',flexDirection:'row',margin:20,justifyContent:'center'}}>
            <View style={{margin:20,alignItems:'center'}}>
                <ModalBtn
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text>Cancel</Text>
                </ModalBtn>
                </View>

            <View style={{margin:20,alignItems:'center'}}>
                <ModalBtn
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text>Upload</Text>
                </ModalBtn>
                </View>
            </View>
            {/* **************Modal Buttons ****************/}
            </ModalInternal>
          </ModalBody>
      </Modal>
</View>

{/******************** Modal ends *****************/}

{/******************  image part ******************/}

<Picturecontainer>
<Image style={{
        resizeMode: 'cover',
        height: 500,
        width: 314,
        borderRadius: 20,  
       }} source={data[position].image}/>
       <DataHolder>
       <Picturedata size='34px'>{data[position].name}</Picturedata>
       <Picturedata size='24px'>{data[position].rollno}</Picturedata>
       </DataHolder>
</Picturecontainer>

       

<ButtonHolder>
        <Buttons onPress={()=>{present()}}>
        <Text style={{color:"green",fontWeight:"bold",fontSize:44,justifyContent:'center',alignItems:'center'}}>P</Text></Buttons>
        <Buttons onPress={()=>{back()}}>
        <Text style={{color:"pink",fontWeight:"bold",fontSize:44,justifyContent:'center',alignItems:'center'}}>X</Text></Buttons>
        <Buttons onPress={()=>{absent()}}>
        <Text style={{color:"red",fontWeight:"bold",fontSize:44,justifyContent:'center',alignItems:'center'}}>A</Text></Buttons>
</ButtonHolder>


</Screencontainer>

  );
}