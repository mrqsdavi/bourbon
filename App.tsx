import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './src/components/TabBar';
import LoginScreen from './src/screens/Login';
import SignInScreen from './src/screens/SignIn';
import SignUpScreen from './src/screens/SignUp';
import DevelopingScreen from './src/screens/Developing';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen
        name="Panel"
        component={DevelopingScreen}
        options={{title: 'Meu painel'}}
      />
      <Tab.Screen
        name="Settings"
        component={DevelopingScreen}
        options={{title: 'Relatórios'}}
      />
      <Tab.Screen
        name="Courses"
        component={DevelopingScreen}
        options={{title: 'Atrasos'}}
      />
      <Tab.Screen
        name="Consult"
        component={DevelopingScreen}
        options={{title: 'Notícias'}}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <NavigationContainer>
        <Stack.Navigator
          headerMode="none"
          screenOptions={{
            gestureEnabled: true,
            gestureDirection: 'horizontal',
            // ...TransitionPresets.RevealFromBottomAndroid,
          }}>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
