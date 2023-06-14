import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { DataProvider } from './context/DataProvider';

import HomeScreen from './screens/HomeScreen';
import Infomation from './screens/Infomation';
import ExplorerScreen from './screens/ExplorerScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<DataProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name="Explorer"
						component={ExplorerScreen}
						options={({ navigation }) => ({
							title: 'Explore',
							headerStyle: styles.headerstyle,
							headerTitleStyle: styles.headertitlestyle,
							headerTintColor: '#000000',
						})}
					/>
					<Stack.Screen
						name="Home"
						component={HomeScreen}
						options={({ navigation }) => ({
							title: 'Chat',
							headerStyle: styles.headerstyle,
							headerTitleStyle: styles.headertitlestyle,
							headerTintColor: '#000000',
						})}
					/>
					<Stack.Screen
						name="More"
						component={Infomation}
						options={{
							title: 'More',
							headerStyle: styles.headerstyle,
							headerTitleStyle: styles.headertitlestyle,
							headerTintColor: '#000000',
						}}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</DataProvider>
	);
}

const styles = StyleSheet.create({
	headerstyle: {
		backgroundColor: '#ffffff'
	},
	headertitlestyle: {
		fontSize: 32,
		color: '#000000',
		fontWeight: 'bold'
	},
})
