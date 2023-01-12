import { View, Text, Button } from 'react-native';

const SettingsScreen = ({ navigation }) => {
	const goToPage = (pageName) => {
		navigation.navigate(pageName);
	};

	return (
		<View>
			<Text>Estamos en SettingsSreen</Text>
			<Button onPress={() => goToPage('Home')} title="Ir a Home" />
		</View>
	);
};

export default SettingsScreen;
