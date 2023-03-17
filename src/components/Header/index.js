import React from 'react';
import {Pressable} from 'react-native';
import {View, Image, Text} from 'react-native';
import {styles} from './styles';

export function Header({title, onBackPress}) {
  return (
    <View style={styles.container}>
      <Pressable hitSlop={20} onPress={onBackPress}>
        <Image
          style={styles.image}
          source={require('../../assets/arrow.png')}
        />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
