import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native';

import Capa from './capa.png'

export default function App() {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Guerra do amanhã</Text>
      <Text style={estilos.descricao}>Gêneros: Ação e fixão</Text>
      <Image source={Capa} style={estilos.imagem}/>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 22,
  },

  descricao: {
    marginBottom: 20,
  },

  imagem: {
      width: 300,
      height: 300,
  }
});
