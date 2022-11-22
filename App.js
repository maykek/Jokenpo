import * as React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import JOKENPO from './components/JOKENPO';

export default function App() {
  return (
    <View style={styles.container}>
     <StatusBar barStyle="dark-content" />
      <JOKENPO/>
    </View>
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


 