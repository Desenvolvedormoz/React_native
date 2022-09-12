import React from 'react';
import {Image, StyleSheet, Text, View } from 'react-native';
import Logo from './assets/logo_transparent.png'
import Foto from './assets/perfil.png'

export default function App() {
  return (
    <View style={styles.container}>
    <Image style={styles.img} source={Logo} />

    <View style={styles.perfil}>
      <Image style={styles.fotoPerfil} source={Foto}/>
      <Text style={styles.nome}>Lucas Manuel</Text>
      <Text style={styles.texto}>Desenvolvedor front-end web e mobile. Com conhecimento e habilidades nas seguintes tecnologias: HTML, CSS, javascript, react js e react-native.</Text>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2DCF1',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    padding: 0,
  },

  fotoPerfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  perfil: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2DCF1',
    flex: 1,
  },

  nome: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 20
  },

  img: {
    width:320,
    flex: 1,
  },

  texto: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  }
});
