import React from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {DETAIL, h, w} from "../Common/variable";

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
    txtDescription: {
        flex: 1,
        fontSize: 14,
        height: 35,
        alignSelf: 'center',
        textAlign: 'center',
    },
    imag: {
        width: w / 2.1,
        height: w / 2.1,
        borderRadius: 5,
        alignSelf: 'center',
    },

});

const ElementOfGallery = (props) => {
    console.log(props.author)
    return (
        <TouchableOpacity onPress={() => {
            props.details.navigate(DETAIL, ({image: props.image, imageF:props.imageF}))
        }}>
            <View style={style.content}>
                <Image
                    style={style.imag}
                    source={{uri: props.image}}
                />
                <View>
                    <Text numberOfLines={1} elipsiszMode={'tail'} style={style.txt}> {props.author}</Text>
                    <Text numberOfLines={2} elipsiszMode={'tail'} style={style.txtDescription}> {props.description ? props.description : (props.altDescription?props.altDescription:'...Без описания')}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}


export default ElementOfGallery