import React, { useContext } from 'react'
import { StyleSheet, TouchableOpacity, Text, View, FlatList, ScrollView } from 'react-native'
import Footer from './Footer'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from 'react-native-elements'
import { DataContext } from '../context/DataProvider';
import { CATEGORY_DATA } from '../constants/constants';
import uuid from 'react-uuid';

const ExplorerScreen = ({ navigation }) => {

  const { category } = useContext<any>(DataContext);

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0');
    return `#${randomColor}`;
    // const COLORS = ["#9932CC", "#F08080", "#00CED1 ", "#FFA07A ", "#7B68EE ","#FFD700 ","#00FF7F ","#8A2BE2 ","#FF6347 ","#00FA9A "];
    // return COLORS[Math.floor(Math.random() * COLORS.length)] 
  };

  const renderCategory = () => {
    let result: any[] = []
    for (let i = 0; i < CATEGORY_DATA.length; i++) {

      result.push(
        <View key={uuid()} style={{ flexDirection: 'column', marginTop: 10 }}>
          <Text style={{ fontWeight: 'bold' }}>{CATEGORY_DATA[i].name}</Text>
          <FlatList horizontal={true}
            data={CATEGORY_DATA[i].topics}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <View style={[styles.tile, { backgroundColor: generateColor() }]}>
                  <Text style={styles.tiletext} numberOfLines={2}>{item}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item: string) => item}
          >
          </FlatList>
        </View>
      )
    }
    return <>{result}</>
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.body}>
        <>
          <View style={{ borderRadius: 10, backgroundColor: '#dddddd', padding: 10 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
              <Text style={styles.history}>History</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text>{(new Date()).toISOString()}</Text>
                <FontAwesomeIcon
                  icon={faCommentDots}
                  style={{ marginLeft: 5 }}
                />
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
              <Avatar size={30} rounded source={require('../assets/icon.png')} />
              <Text ellipsizeMode='tail' style={{ fontWeight: 'bold', marginLeft: 5, fontSize: 16 }} numberOfLines={1}>suggest brand name for my petrol company startup and how to work</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginTop: 10 }}>
              <Avatar size={30} rounded source={require('../assets/message-icon.png')} />
              <Text ellipsizeMode='tail' style={{ marginLeft: 5, fontSize: 16 }} numberOfLines={2}>suggest brand name for my petrol company startup and how to work</Text>
            </View>
          </View>

        </>
        <>
          <Text style={styles.history}>Categories</Text>
          {renderCategory()}
        </>
      </ScrollView>
      <Footer navigation={navigation}></Footer>
    </View>
  )
}

export default ExplorerScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // justifyContent:'space-between',
    paddingLeft: 20,
    paddingRight:20,
    paddingTop: 20
  },
  body: {
  //   flex: 1,
    width: '100%',
  },
  history: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
    fontWeight: 'bold'
  },
  category: {

  },
  tile: {
    padding: 10,
    margin: 10,
    borderRadius: 10,
    width: 160,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tiletext: {
    fontWeight: 'bold',
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center'
  }
})