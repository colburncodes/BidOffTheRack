import React from 'react';
import {SafeAreaView} from 'react-native';
// import {SignUp} from './src/screens/auth/SignUp';
import {SignIn} from './src/screens/auth/SignIn';
// import {Splash} from './src/screens/auth/Splash';

const App = () => {
  return (
    <SafeAreaView>
      {/* <Splash /> */}
      {/* <SignUp /> */}
      <SignIn />
    </SafeAreaView>
  );
};

export default App;
