import React, {Component} from 'react';
import {StyleSheet, ScrollView,TouchableOpacity, View,} from 'react-native';
import Header from "./header";

import ElementOfGallery from "./elementOfGallery";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainWrapperContent: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 2,
        justifyContent: 'space-around',
        marginBottom: 115
    }
});

class Gallery extends Component {
    componentDidMount = () => {
        this.props.getDataThunk()
    };

    render() {
        let GalleryData = this.props.data.commonReducer.data;
        let mapGalleryData = GalleryData.map(key => <ElementOfGallery
            details={this.props.navigation}
            image={key.urls.small}
            imageF={key.urls.full}
            author={key.user.name}
            description={key.description}
            altDescription={key.alt_description}
            key={key.id}/>);
        return (
            <View>
                <Header />
                <ScrollView >
                    <View style={styles.mainWrapperContent}>
                        {mapGalleryData}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Gallery