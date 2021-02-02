import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Crud from './components/Crud/Crud'
import Lista from './components/Lista/Lista'

export default function App() {


  // homePage
  function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.btnss}>

          <Text style={{ fontSize: 30, textAlign: 'center' }}>Menu</Text>
        </View>
        <View style={styles.btnss}>
          <Button
            title="Cadastro de aluno"
            onPress={() => navigation.navigate('Crud')}
          />
        </View>
        <View style={styles.btnss}>
          <Button
            title="Lista de alunos"
            onPress={() => navigation.navigate('Lista')}
          />
        </View>
      </View>
    );
  }

  const Stack = createStackNavigator();
  return (
    // rotas que iram para /router
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Crud" component={Crud} />
        <Stack.Screen name="Lista" component={Lista} />
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
  btnss: {
    width: 300,
    padding: 20

  },
});
