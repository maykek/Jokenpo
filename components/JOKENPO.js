import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

export default function JOKENPO() {
  const [b_user, setUser] = useState('');
  const [com, setCom] = useState('');
  const [result, setResult] = useState('');

  function jogo(user) {
    setUser(user);

    let res;
    let numAle = Math.random();
    numAle = Math.floor(numAle * 3);

    switch (numAle) {
      case 0:
        setCom('pedra');
        if (user == 'pedra') {
          setResult('EMPATE');
        }
        if (user == 'papel') {
          setResult('VOCÊ GANHOU');
        }
        if (user == 'tesoura') {
          setResult('VOCÊ PERDEU');
        }
        break;
      case 1:
        setCom('papel');
        if (user == 'pedra') {
          setResult('VOCÊ PERDEU');
        }
        if (user == 'papel') {
          setResult('EMPATE');
        }
        if (user == 'tesoura') {
          setResult('VOCÊ GANHOU');
        }
        break;
      case 2:
        setCom('tesoura');
        if (user == 'pedra') {
          setResult('VOCÊ GANHOU');
        }
        if (user == 'papel') {
          setResult('VOCÊ PERDEU');
        }
        if (user == 'tesoura') {
          setResult('EMPATE');
        }
        break;
    }
  }

  const pedra = () => jogo('pedra');
  const papel = () => jogo('papel');
  const tesoura = () => jogo('tesoura');

  function ImgUser() {
    if (b_user == 'pedra') {
      return (
        <View style={style.icon}>
          <Image source={require('./images/pedra1.png')} style={style.img} />
          <Text style={style.name}>VOCÊ</Text>
        </View>
      );
    }

    if (b_user == 'papel') {
      return (
        <View style={style.icon}>
          <Image source={require('./images/papel1.jpeg')} style={style.img} />
          <Text style={style.name}>VOCÊ</Text>
        </View>
      );
    }
    if (b_user == 'tesoura') {
      return (
        <View style={style.icon}>
          <Image source={require('./images/tesoura1.jpeg')} style={style.img} />
          <Text style={style.name}>VOCÊ</Text>
        </View>
      );
    }
  }
  function ImgCom() {
    if (com == 'pedra') {
      return (
        <View style={style.icon}>
          <Image source={require('./images/pedra2.jpeg')} style={style.img} />
          <Text style={style.name}>COMPUTADOR</Text>
        </View>
      );
    }

    if (com == 'papel') {
      return (
        <View style={style.icon}>
          <Image source={require('./images/papel2.png')} style={style.img} />
          <Text style={style.name}>COMPUTADOR</Text>
        </View>
      );
    }
    if (com == 'tesoura') {
      return (
        <View style={style.icon}>
          <Image source={require('./images/tesoura2.png')} style={style.img} />
          <Text style={style.name}>COMPUTADOR</Text>
        </View>
      );
    }
  }

  return (
   <View style={{ width: '100%', height: '100%', justifyContent: 'center'}}>
    <StatusBar barStyle="dark-content" />
   <View style={{ alingItems: 'center', justifyContent: 'center', alignContent:'center', margin: 25 }}>

      <View>
        <Text style={style.top}>JOKENPO</Text>
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <ImgUser />
        <ImgCom />
      </View>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text style={style.res}>{result}</Text>
      </View>


      <View style={style.b_user}>
        <TouchableOpacity style={style.button} onPress={pedra}>
          <Text style={{ color: '#C82187', fontWeight: 'bold' }}>PEDRA</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button} onPress={papel}>
          <Text style={{ color: '#C82187', fontWeight: 'bold' }}>PAPEL</Text>
        </TouchableOpacity>

        <TouchableOpacity style={style.button} onPress={tesoura}>
          <Text style={{ color: '#C82187', fontWeight: 'bold' }}>TESOURA</Text>
        </TouchableOpacity>
      </View>

    </View>
    </View>
  );
}

const style = StyleSheet.create({
  top: {
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 20,
    color: '#BF1584',
    fontSize: 60
  },
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
    alignItems: 'center',
  },
  b_user: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  img: {
    margin: 5,
    width: 150,
    height: 150,
  },
  icon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontWeight: 'bold',
    paddingBottom: 20,
    color: '#BF1584',
  },
  res: {
    fontWeight: 'bold',
    paddingBottom: 20,
    color: '#BF1584',
    fontSize: 24,
  },
});
