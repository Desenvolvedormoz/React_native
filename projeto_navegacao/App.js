import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './componentes/TelaInicial';
import TelaHospedagem from './componentes/TelaHospedagem';
import TelaPasseios from './componentes/TelaPasseios';
import TelaRestaurantes from './componentes/TelaRestaurantes';

const Navegacao = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Navegacao.Navigator>
        <Navegacao.Screen name='Página Inicial' component={TelaInicial}/>
        <Navegacao.Screen name='Página Hospedagem' component={TelaHospedagem}/>
        <Navegacao.Screen name='Página Restaurantes' component={TelaRestaurantes}/>
        <Navegacao.Screen name='Página Passeios' component={TelaPasseios}/>
        
        
        
      </Navegacao.Navigator>
    </NavigationContainer>
  );
}
