import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StyleSheet, } from 'react-native';

import NavigationContainer from './routes/index'

export default function App() {

  return (
    <SafeAreaView style={styles.container}>


      <NavigationContainer />

    </SafeAreaView>
    // <NavigationContainer />


  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Platform.OS === 'android' ? 30 : 0,
    // marginTop: 10,

  },
});

