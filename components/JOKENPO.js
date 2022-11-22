import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
  Switch,
  Modal,
} from 'react-native';
import { style } from './images/Styles';

export default function JOKENPO() {
  const [b_user, setUser] = useState('');
  const [com, setCom] = useState('');
  const [result, setResult] = useState('');
  const [user_pts, setUser_pts] = useState(0);
  const [cpu_pts, setCpu_pts] = useState(0);
  const [show, setShow] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);
  const score = () => setIsEnabled((previousState) => !previousState);

  function ShowScore() {
    if (isEnabled == false) {
      setUser_pts(0);
      setCpu_pts(0);
    } else {
      return (
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text style={{ fontSize: 60, color: '#C82187', fontWeight: 'bold' }}>
            {user_pts}{' '}
          </Text>
          <Text
            style={{
              fontStyle: 'italic',
              fontSize: 60,
              color: '#C82187',
              fontWeight: 'bold',
            }}>
            vs
          </Text>
          <Text style={{ fontSize: 60, color: '#C82187', fontWeight: 'bold' }}>
            {' '}
            {cpu_pts}
          </Text>
        </View>
      );
    }
  }

  function jogo(user) {
    setUser(user);

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
          setUser_pts(user_pts + 1);
        }
        if (user == 'tesoura') {
          setResult('VOCÊ PERDEU');
          setCpu_pts(cpu_pts + 1);
        }
        break;
      case 1:
        setCom('papel');
        if (user == 'pedra') {
          setResult('VOCÊ PERDEU');
          setCpu_pts(cpu_pts + 1);
        }
        if (user == 'papel') {
          setResult('EMPATE');
        }
        if (user == 'tesoura') {
          setResult('VOCÊ GANHOU');
          setUser_pts(user_pts + 1);
        }
        break;
      case 2:
        setCom('tesoura');
        if (user == 'pedra') {
          setResult('VOCÊ GANHOU');
          setUser_pts(user_pts + 1);
        }
        if (user == 'papel') {
          setResult('VOCÊ PERDEU');
          setCpu_pts(cpu_pts + 1);
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
    <View style={style.centeredView}>
      <StatusBar barStyle="dark-content" />
      <View style={{alignItems: "flex-end", padding: 30}}>
        <TouchableOpacity onPress={() => setShow(!show)}>
          <Image
            source={require('./images/conf.png')}
            style={{ width: 30, height: 30 }}
          />
        </TouchableOpacity>
      </View>

      <View style={style.centeredView}>
        <Text style={style.top}>JOKENPO</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <ImgUser />
          <ImgCom />
        </View>
        <ShowScore />

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
            <Text style={{ color: '#C82187', fontWeight: 'bold' }}>
              TESOURA
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <Modal transparent={true} animationType="slide" visible={show}>
            <View style={style.centeredView}>
              <View style={style.modalView}>
              <View style={{alignItems: "flex-end", paddingBottom: 15}}>
                <TouchableOpacity onPress={() => setShow(!show)}>
                  <Text style={{ color: '#BF1584', fontWeight: '900',  }}>
                    X
                  </Text>
                </TouchableOpacity>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      color: '#BF1584',
                      fontWeight: 'bold',
                    }}>
                    ADICIONAR PLACAR? {' '}
                  </Text>
                  <Switch
                    trackColor={{ false: '#e9e9e9', true: '#e9e9e9' }}
                    thumbColor={isEnabled ? '#BF1284' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={score}
                    value={isEnabled}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </View>
  );
}
