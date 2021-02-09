import React, { useEffect, useState } from 'react'

import * as ImagePicker from "expo-image-picker";
import { StyleSheet, Text, View, Button, FlatList, Image, TextInput } from 'react-native';

import api from '../../api/index'

const Lista = ({ navigation }) => {

    const [dados, setDados] = useState();
    const [name, setName] = useState('')
    const [endereco, setEndereco] = useState('');
    const [image, setImage] = useState(null);
    const [id, setId] = useState('');
    const [openEdit, setOpenEdit] = useState(false);

    // pegando dados
    useEffect(() => {
        lista()
    }, [])


    // pegar a lista
    const lista = async () => {
        await api.get('/aluno').then(res => {
            setDados(res.data)
        })
    }
    // pega imagem
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            includeBase64: false,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    // deleta
    const deletar = async (index) => {
        await api.delete(`/aluno/${index}`)
        lista()
    }
    const edit = (index) => {
        setId(index)
        setOpenEdit(true)
    }
    const editar = async () => {
        const data = {
            name: name,
            endereco: endereco,
            image: image
        }
        await api.put(`/aluno/${id}`, data)
        lista()
        setOpenEdit(false)


    }
    if (openEdit) {
        return <View style={styles.containerEditar}>
            <Button title="Tela inicial" color="#f4511e" onPress={() => navigation.goBack()} />
            <Text style={{ fontSize: 30, textAlign: "center", margin: 10 }}>Editar</Text>
            <Text style={{ margin: 5 }}>Nome</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
                onChangeText={text => setName(text)}
                value={name}
            />
            <Text style={{ margin: 5 }}>Endereço</Text>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 10 }}
                onChangeText={text => setEndereco(text)}
                value={endereco}
            />
            <View style={styles.btnImg}>
                <Button

                    color="#333"
                    title="Coloque sua imagem" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
            <View style={styles.botaos}>
                <View style={styles.btnExcluir}>
                    <Button
                        color="tomato"
                        title="Cancelar"
                        onPress={() => setOpenEdit(false)}
                    />
                </View>
                <View style={styles.btnEditar}>
                    <Button
                        onPress={() => editar()}
                        color="green"
                        title="Confirmar"
                    />
                </View>
            </View>
        </View>
    }

    return (


        <View style={styles.container}>
            <FlatList
                data={dados}
                renderItem={({ item }) => (
                    <View>
                        <View style={styles.card}>
                            <Image
                                style={{ width: 50, height: 50 }}
                                source={{
                                    uri: item.image,
                                }}
                            />
                            <View style={styles.nomes}>
                                <Text>Nome: {item.name}</Text>
                                <Text>Endereço: {item.endereco}</Text>
                            </View>
                        </View>
                        <View style={styles.botaos}>
                            <View style={styles.btnExcluir}>
                                <Button
                                    color="tomato"
                                    title="deletar"
                                    onPress={() => deletar(item._id)}
                                />
                            </View>
                            <View style={styles.btnEditar}>
                                <Button
                                    color="gold"
                                    title="Editar"
                                    onPress={() => edit(item._id)}
                                />

                            </View>

                        </View>

                    </View>
                )}
                keyExtractor={dados => dados._id}
            />
        </View>

    )
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',

        justifyContent: 'center',
        color: '#333',
    },
    containerEditar: {

    },
    card: {
        flexDirection: 'row',
        textAlign: 'left',
        alignItems: 'center',

        backgroundColor: '#f1f1f1',

    },
    nomes: {
        flexDirection: 'column',
        padding: 10,
    },

    botaos: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
    },

    btnExcluir: {
        margin: 10,
        alignItems: 'center',

    },
    btnImg: {
        margin: 15,
    },
    btnEditar: {
        margin: 10,
        alignItems: 'center',


    }

});



export default Lista
