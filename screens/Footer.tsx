import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState, useContext } from 'react';
import { DataContext } from '../context/DataProvider';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faBarsStaggered, faMessage, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
import { faWindowRestore as _faWindowRestore, faMessage as _faMessage } from '@fortawesome/free-regular-svg-icons';
import { SELECTED_TYPE } from '../constants/constants';

const Footer = ({navigation}) => {

    const { selected, setSelected } = useContext<any>(DataContext);

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {setSelected(SELECTED_TYPE.explorer), navigation.navigate('Explorer')}}>
                <FontAwesomeIcon
                    style={styles.iconStyle}
                    icon={selected === SELECTED_TYPE.explorer ? _faWindowRestore : faWindowRestore}
                    size={24}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setSelected(SELECTED_TYPE.chat), navigation.navigate('Home')}}>
                <FontAwesomeIcon
                    style={styles.iconStyle}
                    icon={selected === SELECTED_TYPE.chat ? _faMessage : faMessage}
                    size={24}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setSelected(SELECTED_TYPE.more), navigation.navigate('More')}}>
                <FontAwesomeIcon
                    style={styles.iconStyle}
                    icon={selected === SELECTED_TYPE.more ? faBarsStaggered : faBars}
                    size={24}
                />
            </TouchableOpacity>
        </View>
    )
}

export default Footer

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    iconStyle: {

    }
})