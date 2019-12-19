import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation'
import React from 'react';
import {StyleSheet} from 'react-native';
import {connect, Provider} from "react-redux";


import {HOME, DETAIL} from "./Common/variable";

import {getDataThunk} from "./redux/commonReduxer";
import store from "./redux/redux";

import Gallery from "./component/gallery";
import Detail from "./component/detail";

import Ionicons from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


let mapStateToProps = (state) => {
    return {data: state}
};

let GalleryContainer = connect(mapStateToProps, {getDataThunk})(Gallery);

let AppNavigator = createStackNavigator(
    {
        [HOME]: GalleryContainer,
        [DETAIL]: Detail
    }, {
        headerMode: 'none'
    });


const NavigationDraw = createDrawerNavigator (
    {
        Screen1: {
            screen: AppNavigator,
            navigationOptions: {
                drawerLabel: 'One',
                drawerIcon: ({tintColor}) => {
                    <Ionicons name={'grade'} size={24} style={{color: tintColor}}/>
                }
            }
        },
        Screen2: {
            screen: AppNavigator,
            navigationOptions: {
                drawerLabel: 'Two',
                drawerIcon: ({tintColor}) => {
                    <Ionicons name={'grade'} size={24} style={{color: tintColor}}/>
                }
            }
        },
        Screen3: {
            screen: AppNavigator,
            navigationOptions: {
                drawerLabel: 'Three',
                drawerIcon: ({tintColor}) => {
                    <Ionicons name={'grade'} size={24} style={{color: tintColor}}/>
                }
            }
        }
    },{
        initialRouteName: 'Screen1'
    }
)


let AppGallery = () => {
    return <Provider store={store}>
        <NavigationDraw/>
    </Provider>
};


export default AppGallery


