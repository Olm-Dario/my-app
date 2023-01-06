import { Text } from 'react-native';
import PropTypes from 'prop-types';

const Saludar = ({ nombre, apellido }) => {
	return <Text>Hola {nombre} </Text>;
};

Saludar.defaultProps = {
	nombre: 'dario',
	apellido: 'olmedo',
};

Saludar.propTypes = {
	nombre: PropTypes.string.isRequired,
	apellido: PropTypes.string,
};

export default Saludar;
