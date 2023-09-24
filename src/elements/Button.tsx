// Button.tsx
import { TouchableOpacity, Text } from 'react-native';
import React from 'react';
import { styles } from '../styles/styles';


const Button: React.FC<ButtonProps> = ({ onPress, title, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.btn, props.style]}>
      <Text style={styles.btnText}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
