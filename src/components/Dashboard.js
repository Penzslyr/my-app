import { NavigationContainer, TabActions } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View } from 'react-native';
import Settings from './Settings';

function Search() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function Favorites() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favorites!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Dashboard = () => {
  return (
      <Tab.Navigator screenOptions={{headerShown: false,}}>
        <Tab.Screen name='Search' component={Search} />
        <Tab.Screen name='Favorite' component={Favorites} />
        <Tab.Screen name='Profile' component={Profile} />
        <Tab.Screen name='Settings' component={Settings} />
      </Tab.Navigator>
  );
};

export default Dashboard;
