import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import NavigationStack from './src/navigation/NavigationStack';

const App = () => {
	return (
		<NavigationContainer>
			<NavigationStack />
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ccc',
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		color: '#000',
	},
});

export default App;
