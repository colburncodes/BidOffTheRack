import React from 'react';
import {View} from 'react-native';
import {Header} from '../../../components/Header';
import {styles} from './styles';
export function SignIn() {
  return (
    <View style={styles.container}>
      <Header title={'Sign In'} />
    </View>
  );
}
