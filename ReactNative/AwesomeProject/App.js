import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, Image, TouchableNativeFeedback, Modal,BackHandler} from 'react-native';
import Header from "./Component/Header";
import {Dimensions} from "react-native";

const url = 'https://gitlab.com/gHashTag/react-native-init-data/raw/master/db.json';
const win = Dimensions.get('window');

const h = win.height;
const w = win.width;

const style = StyleSheet.create({
    mainWrapperContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 2,
        justifyContent: 'space-around',
        marginBottom: 115
    },
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

let {content, imag, txt, mainWrapperContent,imageFullSize} = style;

export default class App extends Component {
    state = {
        data: [],
        modalVisible: false,
        modalImage: ''
    };


    componentWillUnmount() {
        this.backHandler.remove()
    }

    handleBackPress = () => {
        console.log('выход')
        // this.goBack(); // works best when the goBack is async
        return true;
    }


    setModalVisible = (visible, img) => {
        this.setState({modalVisible: visible})
        this.setState({modalImage: img})
    };

    componentDidMount = async () => {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);

        try {
            let response = await fetch(url)
            let data = await response.json()
            this.setState({data})
        } catch (e) {
            this.setState({data: [{id: 1, name: 'пусто'}]})
        }
    };

    render() {
        return (
            <View>
                <Header data={this.state.data}/>
                <ScrollView>
                    <View style={mainWrapperContent}>
                        <Modal animationType={'fade'} trasnporant={true} visible={this.state.modalVisible} onRequestClose={()=>{this.setModalVisible(false, '')}}>
                            <View>
                                <ScrollView>
                                    <Image

                                        style={imageFullSize}
                                        source={{uri: this.state.modalImage}}
                                    />
                                </ScrollView>

                            </View>
                        </Modal>
                        {this.state.data.map(key => <Content name={key.name} image={key.image} key={key.id} setModalVisible={this.setModalVisible}/>)}
                    </View>
                </ScrollView>
            </View>

        );
    }
}

let Content = ({name, image, setModalVisible}) => {
    if (name) {
        return (
            <View style={content}>
                <TouchableNativeFeedback onPress={() => {
                    setModalVisible(true, image)
                }}>
                    <View>
                        <Image
                            style={imag}
                            source={{uri: image}}
                        />
                        <View>
                            <Text style={txt}> {name}</Text>
                        </View>
                    </View>
                </TouchableNativeFeedback>
            </View>
        )
    } else {
        return null
    }
};





