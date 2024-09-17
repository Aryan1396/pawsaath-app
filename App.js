import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from "./src/components/login/Home.js"
import LogInWithEmail from './src/components/login/LogInWithEmail';
import LogInWithPhone from './src/components/login/LogInWithPhone';
import OtpPage from "./src/components/login/OtpPage"
import FirstProfile from './src/components/login/FirstProfile.js';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './src/components/profile/Profile.js';
import AddPet from './src/components/profile/AddPet.js';
import Address from './src/components/profile/Address.js';
import  PetBoarding from "./src/components/profile/PetBoarding.js"
import PetSitting from './src/components/profile/PetSitting.js';
import PetGrooming from './src/components/profile/PetGrooming.js';
import PEtWalker from './src/components/profile/PetWalker.js';
import Vetcare from './src/components/profile/VetCare.js';
import PetTrainer from './src/components/profile/PetTrainer.js';

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          {/* login/register */}
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="LogInWithEmail" component={LogInWithEmail} />
          <Stack.Screen name="LogInWithPhone" component={LogInWithPhone} />
          <Stack.Screen name="OtpPage" component={OtpPage} />
          <Stack.Screen name="FirstProfile" component={FirstProfile} />
          
          {/* profile */}
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="AddPet" component={AddPet} />
          <Stack.Screen name="Address" component={Address} />
          <Stack.Screen name="PetBoarding" component={PetBoarding} />
          <Stack.Screen name="PetSetting" component={PetSitting} />
          <Stack.Screen name="PetGrooming" component={PetGrooming} />
          <Stack.Screen name="PetGrooming" component={PEtWalker} />
          <Stack.Screen name="PetGrooming" component={Vetcare} />
          <Stack.Screen name="PetTrainer" component={PetTrainer} />
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
