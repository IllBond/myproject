import React, {Component} from 'react';
import {View} from 'react-native';
import {connect, Provider} from "react-redux";
import Header from "./Component/Header";

import {getDataThunk} from "./Redux/commonReducer";
import store from "./Redux/store";
import GalleryContentContainer from "./Component/GalleryContentContainer";


class AppNew extends Component {
    componentDidMount = () => {
        this.props.getDataThunk()
    };

    render() {
        return (
                <View>
                    <Header/>
                    <GalleryContentContainer  />
                </View>
        );
    }
}

const mapStateToProps = (state) => ({});

let AppContainer = connect(mapStateToProps, {getDataThunk})(AppNew)

let App = () => {
    return <Provider store={store}>
        <AppContainer/>
    </Provider>
};

export default App

