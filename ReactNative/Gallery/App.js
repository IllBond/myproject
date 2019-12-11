import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
      <View style={styles.container}>
        <Header/>
        <Gallery/>
        <Detail/>
      </View>
  );
}

let Header = () => {
  return <View>
    <Text>Шапка</Text>
  </View>
};

let Gallery = () => {
  return <View>
    <Text>Элемент 1</Text>
    <Text>Элемент 2</Text>
  </View>
};

let Detail = () => {
  return <View>
    <Text>Детали</Text>
  </View>
};






const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
