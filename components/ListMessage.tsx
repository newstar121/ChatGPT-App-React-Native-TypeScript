import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';

import { useFetchMessage } from '../hooks/useFetchMessage';
import Message from './Message';
import { DataContext } from '../context/DataProvider';
import { MessageType } from '../types/types';


const ListMessage = () => {

	const [messages, setMessages] = useState<MessageType[]>([
		{
			id: "sldkfs",
			create: (new Date()).getTime(),
			model: 'tx-3',
			text: "sdsfsdf sdfsdfs dfsdfsdfsd fsdf sdfsdfs  ",
			user: {
				name: 'you',
				avatar: 'sdfsdf'
			},
			usage: {
				prompt_tokens: 1000,
				completion_tokens: 10000,
				total_tokens: 30000,
			},
		},
		{
			id: "sldkfs",
			create: (new Date()).getTime(),
			model: 'tx-3',
			text: "sdsfs dfsdfsdf sdfsdfsdf sdfsdfsdfsd fsdfds fsddfs",
			user: {
				name: 'newstart',
				avatar: 'sdfsdf'
			},
			usage: {
				prompt_tokens: 1000,
				completion_tokens: 10000,
				total_tokens: 30000,
			},
		},
		{
			id: "sldkfs",
			create: (new Date()).getTime(),
			model: 'tx-3',
			text: "sdsfsdf sdfsdf sdfsdfsdf sdfsdfsdf sdfsdfd sfsddfs",
			user: {
				name: 'you',
				avatar: 'sdfsdf'
			},
			usage: {
				prompt_tokens: 1000,
				completion_tokens: 10000,
				total_tokens: 30000,
			},
		},
		{
			id: "sldkfs",
			create: (new Date()).getTime(),
			model: 'tx-3',
			text: "sdsfsd fsdfsdfs dfsdfsdfsd fsdfsdfsdfsd  fdsfsddfssd sfsdfs dfsdfsd fsdfsdfsd fsdf sd fsd fsd fd sfsddf ssdsfs dfsdfs dfsdfs dfsdf sdfs dfsdfsdfsdf dsfsddfs",
			user: {
				name: 'newstart',
				avatar: 'sdfsdf'
			},
			usage: {
				prompt_tokens: 1000,
				completion_tokens: 10000,
				total_tokens: 30000,
			},
		},
		{
			id: "sldkfs",
			create: (new Date()).getTime(),
			model: 'tx-3',
			text: "sdsfs dfsdfsd fsdfsdf  sdfsd fsdfsdf sdf sdf dsf sddfs",
			user: {
				name: 'you',
				avatar: 'sdfsdf'
			},
			usage: {
				prompt_tokens: 1000,
				completion_tokens: 10000,
				total_tokens: 30000,
			},
		}
	]);
	console.log('messagesSide', messages.length);

	const { textInput } = useContext<any>(DataContext);

	console.log('textInput', textInput.text);

	const { data, isLoading } = useFetchMessage(textInput.text);

	console.log('getMessageOutput: ', data.text);

	useEffect(() => {

		if (textInput?.text) {
			setMessages((messages) => [...messages, textInput]);
		}

		if (!!data?.text) {
			setMessages((messages) => [...messages, data]);
		}

		setMessages((messages) => [...messages, {
			id: "sldkfs",
			create: (new Date()).getTime(),
			model: 'tx-3',
			text: "sdsfsdfsd fsdfsdfsdfsd fsdfsdf sdfsd fsdfdsf sddfs",
			user: {
				name: 'newstart',
				avatar: 'sdfsdf'
			},
			usage: {
				prompt_tokens: 1000,
				completion_tokens: 10000,
				total_tokens: 30000,
			},
		}])
	}, [data, data.text]);

	console.log('messagesDown', messages.length);
	console.log('isLoading', isLoading);

	return (
		<View style={{width:'100%', marginLeft:'10px', marginRight: '10px'}}>
			<FlatList
				style={styles.listContainer}
				data={messages}
				renderItem={({ item }) => <Message message={item} />}
				keyExtractor={(item) => item.id.toString()}
				refreshControl={
					<RefreshControl
						refreshing={false}
						onRefresh={() => setMessages([])}
					/>
				}
			/>
		</View>
	);
};

export default ListMessage;

const styles = StyleSheet.create({
	listContainer: {
		flex: 1,
		width: '100%',
		backgroundColor: '#000000',
		marginBottom: 35,
	},
});
