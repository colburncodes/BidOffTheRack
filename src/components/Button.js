import React from 'react';
import {Pressable, Text} from 'react-native';
import {styles} from '../screens/auth/Splash/styles';
export function Button({title, onPress}) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.button_title}>{title}</Text>
    </Pressable>
  );
}
