import React from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaInicial from './componentes/TelaInicial';
import Conteudo from './componentes/Conteudo';

const Tabs = createBottomTabNavigator()

export default function App() {
  return (
  <NavigationContainer>
   <Tabs.Navigator>
    <Tabs.Screen name='Início' component= {TelaInicial}/>
    <Tabs.Screen name= 'Conteúdo' component= {Conteudo}/>
   </Tabs.Navigator>
  </NavigationContainer>
  );
}
