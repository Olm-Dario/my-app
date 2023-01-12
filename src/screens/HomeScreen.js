import { SafeAreaView, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
	const goToSettings = () => {
		navigation.navigate('Settings');
	};

	return (
		<SafeAreaView>
			<Text>Estamos en HomeScreen</Text>
			<Button onPress={goToSettings} title="Ir a Ajustes" />
		</SafeAreaView>
	);
};

export default HomeScreen;
