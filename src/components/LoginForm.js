import { StyleSheet, TextInput, Button, View } from 'react-native';

const LoginForm = () => {
	return (
		<View>
			<TextInput placeholder="Nombre" />
			<TextInput placeholder="Apellido" />
			<Button title="Enviar" onPress={() => console.log('enviado')} />
		</View>
	);
};

export default LoginForm;
