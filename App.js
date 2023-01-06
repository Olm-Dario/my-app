import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Saludar from './src/components/Saludar';

const App = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>hola mundo</Text>
			<Saludar />
			<Saludar nombre="mariela" />
			<Saludar nombre="ana" />
			<StatusBar style="auto" />
		</View>
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
