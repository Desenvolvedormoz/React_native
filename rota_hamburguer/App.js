import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { createDrawerNavigator} from '@react-navigation/drawer';

import TelaInicial from './componentes/TelaInicial';
import TelaSecundaria from './componentes/TelaSecundaria';
import TelaTercearia from './componentes/TelaTercearia';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
       <Drawer.Screen name='Início' component={TelaInicial}/>
      <Drawer.Screen name='Página2' component={TelaSecundaria}/>
      <Drawer.Screen name='Página3' component={TelaTercearia}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

