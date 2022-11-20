import React, { useState }from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';


export default function JOKENPO() {

const [ user, setUser ] = useState('')
const [ com, setCom ] = useState('')
const [ result, setResult ] = useState('')

function jogo(user){

let cpu
let res
let numAle = Math.randon()
    numAle = Math.floor(numAle * 3)

switch(numAle){
case 0: cpu == 'pedra'; break
case 1: cpu == 'papel'; break
case 2: cpu == 'tesoura'; break
}

if(user == 'pedra'){
  if(cpu == 'pedra'){res = 'EMPATE'}
  if(cpu == 'papel'){res = 'VOCÊ PERDEU'}
  if(cpu == 'tesoura'){res = 'VOCÊ GANHOU'}
}

if(user == 'papel'){
  if(cpu == 'pedra'){res = 'VOCÊ GANHOU'}
  if(cpu == 'papel'){res = 'EMPATE'}
  if(cpu == 'tesoura'){res = 'VOCÊ PERDEU'}
}

if(user == 'tesoura'){
  if(cpu == 'pedra'){res = 'VOCÊ PERDEU'}
  if(cpu == 'papel'){res = 'VOCÊ GANHOU'}
  if(cpu == 'tesoura'){res = 'EMPATE'}
}

user =()=>{setUser}
cpu =()=>{setCom}
res =()=>{setResult}

}

const pedra =()=> jogo('pedra')
const papel =()=> jogo('papel')
const tesoura =()=> jogo('tesoura')

return (


<View style={{alingItems: 'center', justifyContent: 'center'}}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', paddingBottom: 20, color: '#BF1584'}}>JOKENPO</Text>


      <View></View>

    <View style={style.b_user}>

      <TouchableOpacity style={style.button} onPress = {pedra}>
        <Text style={{color: '#C82187', fontWeight: 'bold'}}>PEDRA</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button} onPress = {papel}>
        <Text style={{color: '#C82187', fontWeight: 'bold'}}>PAPEL</Text>
      </TouchableOpacity>

      <TouchableOpacity style={style.button} onPress = {tesoura}>
        <Text style={{color: '#C82187', fontWeight: 'bold'}}>TESOURA</Text>
      </TouchableOpacity>
        
    </View>

    <View>
      <Text>user :{user}</Text> 
      <Text>cpu :{com}</Text>
      <Text>{result}</Text>
    </View> 

</View>

  );
}

const style = StyleSheet.create ({
  button: {
    borderStartWidth: 2,
    borderEndWidth: 2,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 10,
    borderColor: '#C82187',
    color: '#C82187',
    margin: 1,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center'

  },
  b_user:{
    flexDirection: 'row',
    justifyContent: 'center'
  },
  // img:{
  //   margin: 5,
  //   width: 100,
  //   height: 100,
  // }
})


      // <Image source = {require ('./images/papel1.jpeg')} style={style.img}/>
      // <Image source = {require ('./images/pedra1.png')} style={style.img}/>
      // <Image source = {require ('./images/tesoura1.jpeg')} style={style.img}/>
      // <Image source = {require ('./images/papel2.png')} style={style.img}/>
      // <Image source = {require ('./images/pedra2.jpeg')} style={style.img}/>
      // <Image source = {require ('./images/tesoura2.png')} style={style.img}/>
