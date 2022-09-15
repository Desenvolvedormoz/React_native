import React from 'react'
import { View, Text, Button, Image } from 'react-native';
import Paraty from '../../assets/paraty.png'
import estilos from './estilos';

export default function TelaInicial(props){
    return(
        <View style={estilos.container}>
            <View style={estilos.container_2}>
            <Text style={estilos.titulo}>Paraty</Text>
            <Text style={estilos.texto}>Saiba o que visitar em Paraty</Text>
          
            <Image style={estilos.img} source={Paraty} />
            <View style={estilos.butao}>
            <Button style={{backgroundColor:'#372d00'}} color='#372d00' title='Vá para Hospedagem' onPress={()=>props.navigation.navigate('Página Hospedagem')} />
            </View>
            <View style={estilos.butao}>
            <Button title='Vá Para Passeios' color= '#372d00' onPress={()=>props.navigation.navigate('Página Passeios')} style={{backgroundColor: '#372d00'} } />
            </View>
            <View style={estilos.butao}>
            <Button title='Vá para Restaurantes' color= '#372d00' onPress={()=>props.navigation.navigate('Página Restaurantes')} />
            </View>
            </View>
        </View>
    )
}
