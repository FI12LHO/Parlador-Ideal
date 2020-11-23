import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreatePost from './pages/create post';
import ShowPost from './pages/show post';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ShowPost' component={ShowPost} />
        <Stack.Screen name='CratePost' component={CreatePost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;