import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import Saludar from './src/components/Saludar';

const App = () => {
	return (
		<NavigationContainer>
			<View style={styles.container}>
				<Text style={styles.text}>hola dario</Text>
				<Saludar />
				<Saludar nombre="mariela" />
			</View>
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
