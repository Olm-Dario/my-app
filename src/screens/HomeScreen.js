import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
	const goToSettings = () => {
		navigation.navigate('Settings');
	};

	return (
		<View>
			<Text>Estamos en HomeScreen</Text>
			<Button onPress={goToSettings} title="Ir a Ajustes" />
		</View>
	);
};

export default HomeScreen;
