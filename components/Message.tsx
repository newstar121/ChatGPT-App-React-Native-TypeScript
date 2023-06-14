// import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ToastAndroid, Image } from 'react-native';
import { Avatar } from 'react-native-elements'
import * as Clipboard from 'expo-clipboard';

import { MessageType } from '../types/types';

type MessageProps = {
	message: MessageType;
};

const Message = ({ message }: MessageProps) => {

	const copyToClipboard = async () => {
		try {
			await Clipboard.setStringAsync(message.text);
			ToastAndroid.show('Copied to clipboard', ToastAndroid.SHORT);
		} catch (error) {
			console.log('toast error', error)
		}

	};

	return (
		// <View style={message.user.name === 'you' ? styles.messageyou : styles.messagechatgpt}>
		// 	<View style={message.user.name === 'you' ? styles.profileyou : styles.profilechatgpt}>
		// 		{message.user.name === 'you' ? (
		// 			<>
		// 				<Text style={styles.author}>{message.user.name}</Text>
		// 				<Image style={styles.Image} source={require('../assets/icon.png')} />

		// 			</>
		// 		) : (
		// 			<>
		// 				<Image style={styles.Image} source={require('../assets/message-icon.png')} />
		// 				<Text style={styles.author}>{message.user.name}</Text>
		// 			</>
		// 		)}

		// 	</View>
		// 	<TouchableOpacity onPress={() => copyToClipboard()}>
		// 		<Text style={styles.text}>{message.text}</Text>
		// 	</TouchableOpacity>
		// </View>
		<>
			{message.user.name === 'you' ? (
				<View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
					<View style={{ flexDirection: 'column' }}>
						<Text style={styles.textyou}>{(new Date(message.create).toISOString())}</Text>
						<View style={styles.messageyou}>
							<TouchableOpacity onPress={() => copyToClipboard()}>
								<Text style={styles.textchatgpt}>{message.text}</Text>
							</TouchableOpacity>
						</View>
					</View>
					<Avatar size={30} rounded source={require('../assets/icon.png')} />
				</View>
			) : (
				<View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>

					<Avatar size={30} rounded source={require('../assets/message-icon.png')} />
					<View style={{ flexDirection: 'column' }}>
						{/* <Text style={styles.textyou}>{(new Date(message.create).toISOString())}</Text> */}
						<View style={styles.messagechatgpt}>
							<TouchableOpacity onPress={() => copyToClipboard()}>
								<Text style={styles.textchatgpt}>{message.text}</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
			)}
		</>

	);
};

export default Message;

const styles = StyleSheet.create({
	nova: {
		flexDirection: 'row',
	},
	messagechatgpt: {
		backgroundColor: '#d2f9d1',
		padding: 10,
		margin: 10,
		borderRadius: 10,
		width: 'fit-content',
		maxWidth: '70%'

	},
	messageyou: {
		backgroundColor: '#dddddd',
		padding: 10,
		margin: 10,
		borderRadius: 10,
		width: 'fit-content',
		alignSelf: 'flex-end',
		maxWidth: '70%',
	},
	textyou: {
		color: '#000',
		fontSize: 16,
		alignSelf: 'flex-end',
	},
	textchatgpt: {
		color: '#000',
		fontSize: 16,
		alignSelf: 'flex-end',
	},
	profileyou: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
		marginBottom: 5,
	},
	profilechatgpt: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 5,
		justifyContent: 'flex-start'
	},
	author: {
		color: '#fff',
		fontSize: 12,
		marginLeft: 8,
	},
	Image: {
		width: 25,
		height: 25,
		borderRadius: 8,
	},
});
