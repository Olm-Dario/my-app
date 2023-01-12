import { SafeAreaView, Text, Button } from 'react-native';

const SettingsScreen = ({ navigation }) => {
	const goToPage = (pageName) => {
		navigation.navigate(pageName);
	};

	return (
		<SafeAreaView>
			<Text>Estamos en SettingsSreen</Text>
			<Button onPress={() => goToPage('Home')} title="Ir a Home" />
		</SafeAreaView>
	);
};

export default SettingsScreen;
