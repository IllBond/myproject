import React from 'react'
import {Dimensions, Image, Modal, ScrollView, StyleSheet, Text, View} from 'react-native';

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
    imageFullSize: {
        width: w,
        height: h,
        alignSelf: 'center',
    }
});


const ModalForGallery = (props) => {
    return <Modal animationType={'slide'} visible={props.modalVisible} onRequestClose={() => {
        props.editModalData(false, '')
    }}>
        <View>
            <ScrollView>
                <Image
                    style={style.imageFullSize}
                    source={{uri: props.modalImage}}
                />
            </ScrollView>
        </View>
    </Modal>
}


export default ModalForGallery