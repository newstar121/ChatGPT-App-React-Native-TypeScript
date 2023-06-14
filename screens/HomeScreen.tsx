import { StyleSheet, View } from 'react-native';
import Layout from '../components/Layout';
import ListMessage from '../components/ListMessage';
import InputMessage from '../components/InputMessage';
import Footer from './Footer';

const HomeScreen = ({ navigation }) => {

	return (
		<View style={styles.container}>
			<Layout>
				<ListMessage />
				<InputMessage />
			</Layout>
			<Footer navigation={navigation}></Footer>
		</View>

	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'space-between'
	}
})