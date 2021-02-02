import React, { useState } from 'react'
import * as ImagePicker from "expo-image-picker";
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Image } from 'react-native';

import api from '../../api/index'

const Crud = ({ navigation }) => {
    const [name, setName] = useState('')
    const [endereco, setEndereco] = useState('');
    const [image, setImage] = useState(null);



    // pega o data da imagem
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            includeBase64: false,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result)


        if (!result.cancelled) {
            setImage(result.uri);
        }
    };


    // submit btn
    const submit = () => {
        let formData = new FormData()
        try {
            formData.append('name', name)
            formData.append('endereco', endereco)
            formData.append('image', image)

            api.post('/aluno', formData).then(res => {
                console.log(res)
                console.log("Sucesso!")
            })

        } catch (err) {
            console.log(err)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={{ fontSize: 30 }}>Cadastrar</Text>
                <Text>Nome</Text>

                <TextInput
                    style={{ width: 300, height: 60, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setName(text)}
                    value={name}
                />
                <Text>Endereço</Text>
                <TextInput
                    style={{ width: 300, height: 60, borderColor: 'gray', borderWidth: 1, margin: 10 }}
                    onChangeText={text => setEndereco(text)}
                    value={endereco}
                />

                <View style={styles.btnImg}>
                    <Button
                        color="#333"
                        title="Coloque sua imagem" onPress={pickImage} />
                    {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
                </View>
                <View style={styles.btnSubmit}>
                    <Button
                        title="Cadastrar"
                        onPress={() => submit()}
                    />
                </View>
                <Button color="#f4511e" title="Tela inicial" onPress={() => navigation.goBack()} />
            </View>
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnImg: {
        margin: 10,
    },
    btnSubmit: {
        margin: 10,
    }
});

export default Crud
