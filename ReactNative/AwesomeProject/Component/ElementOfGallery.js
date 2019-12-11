import React from 'react'
import {Dimensions, Image, StyleSheet, Text, TouchableNativeFeedback, View} from 'react-native';

const win = Dimensions.get('window');
const h = win.height;
const w = win.width;

const style = StyleSheet.create({
    content: {
        width: w / 2.1,
        padding: 10,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 4,
        marginBottom: 10
    },
    txt: {
        flex: 1,
        fontSize: 20,
        alignSelf: 'center',
        textAlign: 'center',
    },
    imag: {
        width: w / 2.4,
        height: h / 2.4,
        borderRadius: 5,
        alignSelf: 'center',
    },

});

const ElementOfGallery = (props) => {
    if (props.name) {
        return (
            <View style={style.content}>
                <TouchableNativeFeedback onPress={() => {
                    props.setModalVisible(true, props.image)
                }}>
                    <View>
                        <Image
                            style={style.imag}
                            source={{uri: props.image}}
                        />
                        <View>
                            <Text style={style.txt}> {props.name}</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    } else {
        return null
    }
}



export default ElementOfGallery