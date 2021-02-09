import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

import { AntDesign } from '@expo/vector-icons';

function card(props) {
    const [liked, setLiked] = useState(false)
    return (
        <View>
            <View style={styles.header}>

                <Image
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        marginRight: 15

                    }}
                    source={{
                        uri: props.url
                    }}

                />
                <Text>
                    {props.name}
                </Text>
            </View>
            {/* component header */}
            {/* component card image */}
            <View>
                <Image
                    style={{
                        width: '100%',
                        height: 350,

                    }}
                    source={{
                        uri: props.url
                    }}

                />

                <View style={styles.header}>
                    <TouchableOpacity onPress={() => setLiked(!liked)}>
                        {liked && <AntDesign name="heart" size={24} color="black" />}
                        {!liked && <View style={styles.liked}>
                            <AntDesign
                                style={{
                                    marginRight: 15
                                }}
                                name="heart" size={24} color="red" />
                            <Text>Liked!</Text>
                        </View>}
                    </TouchableOpacity>
                </View>

            </View>
            {/* component card image */}
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        padding: 15,
        alignItems: 'center',
    },
    liked: {
        flexDirection: 'row',

        alignItems: 'center',
    }
});


export default card
