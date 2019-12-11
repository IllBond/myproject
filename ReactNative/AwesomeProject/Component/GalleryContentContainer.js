import React, {useState} from 'react'
import {ScrollView, StyleSheet, View} from 'react-native';
import ElementOfGallery from "./ElementOfGallery";
import ModalForGallery from "./ModalForGallery";
import {connect} from "react-redux";



const style = StyleSheet.create({
    mainWrapperContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 2,
        justifyContent: 'space-around',
        marginBottom: 115
    }
});


const GalleryContent = (props) => {
    let [modalVisible, editModalVisible] = useState(false)
    let [modalImage, editModalImage] = useState('')

    let editModalData = (bool, img) => {
        editModalVisible(bool);
        editModalImage(img);
    };

    const GalleryElementS = props.data.commonReducer.data.map(key =>
        <ElementOfGallery name={key.name}
                          image={key.image}
                          key={key.id}
                          setModalVisible={()=>{editModalData(true, key.image)}}/>
                          );

    return <ScrollView>
        <View style={style.mainWrapperContent}>
            {<ModalForGallery modalVisible={modalVisible} modalImage={modalImage} editModalData={editModalData}/>}
            {GalleryElementS}
        </View>
    </ScrollView>
};

const mapStateToProps = (state) => {
    return {data: state}
};

let GalleryContentContainer = connect(mapStateToProps, {})(GalleryContent)

export default GalleryContentContainer