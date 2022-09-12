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
    backgroundColor: '#fcc',
    alignItems: 'center',
    justifyContent: 'center',
  },

  fotoPerfil: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },

  perfil: {
    padding: 20,
    alignItems: 'center'
  },

  nome: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 20
  },

  img: {
    width: 300,
    height: 200,
  },

  texto: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 16,
  }
});
