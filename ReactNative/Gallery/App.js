import {createStackNavigator} from 'react-navigation'
import React from 'react';
import {StyleSheet} from 'react-native';
import {connect, Provider} from "react-redux";

import {HOME, DETAIL} from "./Common/variable";

import {getDataThunk} from "./redux/commonReduxer";
import store from "./redux/redux";

import Gallery from "./component/gallery";
import Detail from "./component/detail";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});


let mapStateToProps = (state) => {
    return {data:state}
};

let GalleryContainer = connect(mapStateToProps, {getDataThunk})(Gallery);

let AppNavigator = createStackNavigator(
    {
        [HOME]: GalleryContainer,
        [DETAIL]: Detail
    }, {
        headerMode: 'none'
    });

let AppGallery = () => {
    return <Provider store={store}>
        <AppNavigator/>
    </Provider>
};

export default AppGallery


