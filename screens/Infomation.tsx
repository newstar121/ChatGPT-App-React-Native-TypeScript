import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Footer from './Footer'

const Infomation = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Infomation</Text>
      <Footer navigation={navigation}></Footer>
    </View>
  )
}

export default Infomation

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
})