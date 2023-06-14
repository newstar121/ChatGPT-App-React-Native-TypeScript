import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<View style={styles.container}>
			{/* <StatusBar backgroundColor={'#000000'} barStyle={'light-content'} /> */}
			{children}
		</View>
	);
};

export default Layout;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection:'column',
		padding: 10,
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});
