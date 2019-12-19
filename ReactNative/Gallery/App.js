import {createBottomTabNavigator, createStackNavigator, createDrawerNavigator} from 'react-navigation'
import React from 'react';
import {StyleSheet} from 'react-native';
import {connect, Provider} from "react-redux";


import {HOME, DETAIL} from "./Common/variable";

import {getDataThunk} from "./redux/commonReduxer";
import store from "./redux/redux";

import Gallery from "./component/gallery";
import Detail from "./component/detail";

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

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


let NavigationTab = createBottomTabNavigator(
    {
        One: AppNavigator,
        Two: AppNavigator,
        Three: AppNavigator
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName;
                if (routeName === 'One') {
                    iconName = focused ? 'ios-videocam' : 'ios-play'
                } else if (routeName === 'Two') {
                    iconName = focused ? 'ios-videocam' : 'ios-play'
                } else if (routeName === 'Three') {
                    iconName = focused ? 'ios-videocam' : 'ios-play'
                }
                return <Ionicons name={iconName} color={tintColor} size={25}/>
            }
        }),
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'grey'
        }
    }
)

let NavigationDraw = createDrawerNavigator = (
    {
        One: {
            screen: AppNavigator,
            navigationOptions: {
                drawerLabel: 'One',
                drawerIcon: ({tintColor}) => {
                    <MaterialIcons />
                }
            }
        },
        Two: AppNavigator,
        Three: AppNavigator
    }
)


let AppGallery = () => {
    return <Provider store={store}>
        <NavigationTab/>
    </Provider>
};


export default AppGallery


