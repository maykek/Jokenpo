import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import JOKENPO from './components/JOKENPO';

export default function App() {
  return (
  <View>
    <JOKENPO/>
  </View>
  );
}

