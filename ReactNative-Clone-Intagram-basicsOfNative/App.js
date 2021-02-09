import React from 'react';
import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';

import Card from './components/card'



export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <ScrollView>
       
        <Card name="Felino" url="https://cdn.pixabay.com/photo/2020/07/17/06/41/feline-5413170_960_720.jpg" />
        <Card name="Woman" url="https://cdn.pixabay.com/photo/2020/09/17/05/19/women-5578067_960_720.jpg" />
        <Card name="Nature" url="https://cdn.pixabay.com/photo/2020/11/22/07/11/river-5765785_960_720.jpg" />
        

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
