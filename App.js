import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
} from 'react-native';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import { checkLogin } from './src/reduxState/accSlice';
import { store } from './src/app/store';
import LoginForm from './src/components/LoginForm';
import Dashboard from './src/components/Dashboard';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}> 
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false,}}>
        <Stack.Screen name="Login" component={LoginForm}/>
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

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
