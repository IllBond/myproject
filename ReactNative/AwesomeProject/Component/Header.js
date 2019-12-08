import React from 'react'
import { StyleSheet, Text, View } from 'react-native';


const Header = ({data}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{data[0]?data[0].name:''}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#30d0fe',
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 116,
        paddingTop: 70,
        paddingLeft: 10,
        shadowColor: 'red',
        shadowOffset: {width:0, height: 2},
        elevation:2,
        shadowOpacity:0.1,
        position:'relative'

    },
    text: {
        fontFamily: 'monospace',
        color: 'white',
        fontSize: 28
    },
});


export default Header