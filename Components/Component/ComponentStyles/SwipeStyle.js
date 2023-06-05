import styled from "styled-components";

export const Screencontainer=styled.View`
display: flex;
/* justify-content: center;*/
align-items: center; 
width:100%;
height: 100%;
background-color: #4285F4;
`
export const Picturecontainer=styled.View`
display: flex;
justify-content: center;
align-items: center;
border-radius: 20px;
margin-top: 50px;
position: absolute;
`
export const Picturedata=styled.Text`
color: white;
font-size: ${props=>props.size};
bottom: 10px;
`
export const DataHolder=styled.View`
justify-content: center;
align-items: center;
background-color: rgba(0, 0,0,.4);
height: 20%;
width: 100%;
position: absolute;
bottom: 0px;
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
`
export const ButtonHolder=styled.View`
display: flex;
flex-direction: row;
/* height: 9%; */
position: absolute;
bottom: 6%;
`
export const Buttons=styled.TouchableOpacity`
display: flex;
align-items: center;
justify-content: center;
height: 70px;
width: 70px;
margin: 10px;
border-radius: 35px;
background-color: whitesmoke;
/* position: absolute; */
/* bottom: 8%; */
`

export const ModalBody=styled.View`
position: absolute;
bottom: 0px;
/* margin: 0px; */
width: 100%;
height: 40%;
background-color: white;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
`
export const ModalInternal=styled.View`
margin: 20px;
`

export const ModalBtn=styled.TouchableOpacity`
width: 100px;
height: 50px;
border: 2px solid black;
background-color:'green';
box-shadow: 2px 2px;
border-radius: 25px;
justify-content: center;
align-items: center;
`