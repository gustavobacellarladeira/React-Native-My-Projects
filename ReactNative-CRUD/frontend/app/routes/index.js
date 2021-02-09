import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Crud from '../components/Cadastro/Cadastro'
import Lista from '../components/Lista/Lista'

export default function Router() {

    // homePage
    function HomeScreen({ navigation }) {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={styles.btnss}>

                    <Text style={{ fontSize: 40, textAlign: 'center' }}>Menu</Text>
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
                    backgroundColor: '#333',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontWeight: 'bold',
                },
            }}>
                <Stack.Screen options={{ title: 'Menu' }} name="Home" component={HomeScreen} />
                <Stack.Screen options={{ title: 'Cadastrar Novo Usuário' }} name="Crud" component={Crud} />
                <Stack.Screen options={{ title: 'Lista de Usuários' }} name="Lista" component={Lista} />
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
