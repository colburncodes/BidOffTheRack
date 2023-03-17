import React from 'react';
import {Text, Image, Pressable, View} from 'react-native';
import {Button} from '../../../components/Button';
import {styles} from '../Splash/styles';
export function Splash() {
  function handleRegisterUser() {
    console.log('Register User');
  }
  function handleSignInUser() {
    console.log('Login User');
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/splash.png')}
      />
      <Text style={styles.splash__title}>
        Bid
        <Text style={styles.inner__title}>OffThe</Text>
        Rack
      </Text>

      <Button title={'Sign Up'} onPress={handleRegisterUser} />

      <Pressable onPress={handleSignInUser}>
        <Text style={styles.signin_text}>Sign In</Text>
      </Pressable>
    </View>
  );
}
