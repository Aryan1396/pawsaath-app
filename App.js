import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './src/components/home/Home';
import LogInWithEmail from './src/components/login/LogInWithEmail';
import LogInWithPhone from './src/components/login/LogInWithPhone';
import OtpPage from "./src/components/login/OtpPage"
import FirstProfile from './src/components/login/FirstProfile.js';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="LogInWithEmail" component={LogInWithEmail} />
          <Stack.Screen name="LogInWithPhone" component={LogInWithPhone} />
          <Stack.Screen name="OtpPage" component={OtpPage} />
          <Stack.Screen name="FirstProfile" component={FirstProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF4E2'
  },
});
