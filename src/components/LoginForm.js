import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkLogin } from '../reduxState/accSlice';

const LoginForm = ({navigation}) => {
  const isLogin = useSelector((state) => state.acc.isLogin);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loginTemp, setLoginTemp] = useState()
  const dispatch = useDispatch();

  const loginClick = (email, password) => {
    dispatch(checkLogin({ email, password }))
    if(loginTemp){
      navigation.navigate('Dashboard');
    }
    
  };

  useEffect(() => {
    setLoginTemp(isLogin)
  }, [isLogin]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#dbe4f3' }}>
      <StatusBar backgroundColor={'#dbe4f3'} barStyle='dark-content' />
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 60,
        }}
      >
        <Text style={{ marginTop: 10, fontWeight: 'bold', fontSize: 18 }}>
          Login
        </Text>
      </View>

      <TextInput
        onChangeText={setEmail}
        value={email}
        style={styles.input}
        placeholder='Masukkan email'
      />
      {/* <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      /> */}
      <TextInput
        onChangeText={setPassword}
        value={password}
        style={styles.input}
        placeholder='masukkan password'
      />
      <Button onPress={() => loginClick(email, password)} title='Login'>
        Test
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginForm;
