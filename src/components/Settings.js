import React from 'react'
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';

const Settings = () => {
    const profileDataIndex = useSelector((state)=>state.acc.whoIsLogin)
    const profileData = useSelector((state)=>state.acc.account[profileDataIndex])
    console.log(profileData);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>First Name: {profileData.firstName} </Text>
          <Text>Last Name: {profileData.lastName} </Text>
          <Text>Email: {profileData.email} </Text>
          <Text>Gender: {profileData.gender} </Text>
        </View>
      );
}

export default Settings