import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import OrderScreen from './screens/OrderScreen';
import ChineseScreen from './screens/ChineseScreen';
import KoreanScreen from './screens/KoreanScreen';
import JapaneseScreen from './screens/JapaneseScreen';
import WesternScreen from './screens/WesternScreen';
import SnackScreen from './screens/SnackScreen';
import DessertScreen from './screens/DessertScreen';
import SplashScreen from './screens/SplashScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Order" component={OrderScreen} options={{ headerShown: false }} /> 
        <Stack.Screen name="Chinese" component={ChineseScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Korean" component={KoreanScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Japanese" component={JapaneseScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Western" component={WesternScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Snack" component={SnackScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Dessert" component={DessertScreen} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);