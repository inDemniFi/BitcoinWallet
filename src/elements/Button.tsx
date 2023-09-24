import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { styles } from '../styles/styles';

interface ButtonProps {
  onPress: () => void; // Define the type of onPress as a function
  title: string; // Assuming title is a string
  style?: object; // You can define the type of style as needed
}

const Button: React.FC<ButtonProps> = ({ onPress, title, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, props.style]}>
      <Text style={styles.btnText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
