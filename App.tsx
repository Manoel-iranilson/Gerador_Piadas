import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import Routes from './src/routes/routes';
import Login from './src/screens/login';

const App = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);

    return subscriber;
  }, []);

  return (
    <NavigationContainer>
      <StatusBar />
      {/* {user ? <Login/> : <Routes/> } */}
      <Routes />
    </NavigationContainer>
  );
};
export default App;
