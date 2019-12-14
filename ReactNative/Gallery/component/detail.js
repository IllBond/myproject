import React from 'react';
import {StyleSheet, Text,Image, View} from 'react-native';
import Header from "./header";
import {h, w} from "../Common/variable";
import ImageZoom from 'react-native-image-pan-zoom';



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

let Detail = (props) => {
    return <View>
        {/*<Header navigation = {props.navigation} goBack={true}/>*/}
        <ImageZoom cropWidth={w}
                   cropHeight={h}
                   imageWidth={w}
                   imageHeight={h} >
            <Image
                resizeMode={'contain'}
                style={{maiWidth: w, minHeight: h}}
                source={{uri: props.navigation.state.params.imageF}}
            />
        </ImageZoom>
    </View>
};

export default Detail