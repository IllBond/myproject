import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {connect, Provider} from "react-redux";

import {getDataThunk} from "./redux/commonReduxer";
import store from "./redux/redux";

let Header = () => {
  return <View>
    <Text>Шапка</Text>
  </View>
};

let Gallery = () => {
  return <View>
    <Text>Элемент 1</Text>
    <Text>Элемент 2</Text>
    <Text>Элемент 3</Text>
  </View>
};
let Detail = () => {
  return <View>
    <Text>Детали</Text>
  </View>
};

class AppNew extends Component {
  componentDidMount = () => {
    this.props.getDataThunk()
  };

  render() {
    return (
        <View>
          <Header/>
          <Gallery/>
          <Detail/>
        </View>
    );
  }
}

let mapStateToProps = (state) => {
  return {}
}

let AppContainer = connect(mapStateToProps, {getDataThunk})(AppNew)

let App = () => {
  return <Provider store={store}>
    <AppContainer/>
  </Provider>
};

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
