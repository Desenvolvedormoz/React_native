import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from './componentes/Content';
import Content from './componentes/Content';

const Drawer = createDrawerNavigator()

export default function App() {
  return (
   <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name='First Page' component={Home}/>
      <Drawer.Screen name='Content Page' component={Content}/>
    </Drawer.Navigator>
   </NavigationContainer>
  );
}

