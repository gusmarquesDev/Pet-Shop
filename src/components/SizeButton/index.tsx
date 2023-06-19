import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { styles } from './styles';

type SizeButtonProps ={
    buttons:Array<Object>
}
const SizeButton: React.FC<SizeButtonProps> = ({ buttons}) => {
  const [activeButton, setActiveButton] = useState('');

  const handleActive = (buttonId:any) => {
    setActiveButton(buttonId);
  };

  return (
    <View style={styles.container}>
      {buttons.map((button:any) => (
        <TouchableOpacity
          key={button.id}
          style={[
            styles.button,
            activeButton === button.id && styles.buttonActive,
          ]}
          onPress={() => handleActive(button.id)}
        >
          <Text style={styles.buttonText}>{button.size}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SizeButton;