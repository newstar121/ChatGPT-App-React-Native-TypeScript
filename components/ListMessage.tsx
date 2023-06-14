import React, { useState, useContext, useEffect } from 'react';
import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';

import { useFetchMessage } from '../hooks/useFetchMessage';
import Message from './Message';
import { DataContext } from '../context/DataProvider';
import { MessageType } from '../types/types';
import uuid from 'react-uuid';

const ListMessage = () => {

	const [messages, setMessages] = useState<MessageType[]>([
		{
			id: "1",
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
			id: "2",
			create: (new Date()).getTime(),
			model: 'tx-3',
			text: "sdsfs dfsdfsdf sdfsdfsdf sdfsdfsdfsd fsdfds fsddfs",
			user: {
				name: 'newstar',
				avatar: 'sdfsdf'
			},
			usage: {
				prompt_tokens: 1000,
				completion_tokens: 10000,
				total_tokens: 30000,
			},
		},
		{
			id: "3",
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
			id: "4",
			create: (new Date()).getTime(),
			model: 'tx-3',
			text: "sdsfsd fsdfsdfs dfsdfsdfsd fsdfsdfsdfsd  fdsfsddfssd sfsdfs dfsdfsd fsdfsdfsd fsdf sd fsd fsd fd sfsddf ssdsfs dfsdfs dfsdfs dfsdf sdfs dfsdfsdfsdf dsfsddfs",
			user: {
				name: 'newstar',
				avatar: 'sdfsdf'
			},
			usage: {
				prompt_tokens: 1000,
				completion_tokens: 10000,
				total_tokens: 30000,
			},
		},
		{
			id: "5",
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
			setMessages((messages: any) => [...messages, textInput]);
		}

		if (!!data?.text) {
			setMessages((messages: any) => [...messages, data]);
		}

		setMessages((messages: any) => [...messages, {
			id: uuid(),
			create: (new Date()).getTime(),
			model: 'tx-3',
			text: "sdsfsdfsd fsdfsdfsdfsd fsdfsdf sdfsd fsdfdsf sddfs",
			user: {
				name: 'newstar',
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
		<View style={styles.container}>
			<FlatList
				style={styles.listContainer}
				data={messages}
				renderItem={({ item }) => <Message message={item} />}
				keyExtractor={(item: { id: { toString: () => any; }; }) => item.id.toString()}
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
	container: {
		flex: 1,
		width: '100%',
		marginLeft: 10,
		marginRight: 10,
		paddingLeft: 10,
		paddingRight: 10,
		overflow: 'scroll',
	},
	listContainer: {
		flex: 1,
		width: '100%',
	},
});
