import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';


const styles = StyleSheet.create({
    goBack: {
        paddingLeft: 30
    },
    container: {
        backgroundColor:'#30d0fe',
        height: 116,
        paddingTop: 70,
        paddingLeft: 10,
        shadowColor: 'red',
        shadowOffset: {width:0, height: 2},
        elevation:2,
        shadowOpacity:0.1,
        position:'relative'
    },
    txt: {
        fontFamily: 'monospace',
        color: 'white',
        fontSize: 28
        }
});

let Header = ({goBack,navigation}) => {
    return <View style={styles.container}>
        <TouchableOpacity onPress={() => {
            if (navigation) {
                return navigation.goBack()
            } else {return null}
        }}>
            <Text  style={styles.txt}>{goBack ? '< Назад' : 'Главная'}</Text>
        </TouchableOpacity>
    </View>
};

export default Header