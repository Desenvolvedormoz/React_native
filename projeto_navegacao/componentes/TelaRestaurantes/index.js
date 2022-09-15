import React from 'react'
import { View, Text, Image } from 'react-native';
import Restaurante01 from '../../assets/restaurantes/restaurante01.png';
import Restaurante02 from '../../assets/restaurantes/restaurante02.png';
import Restaurante03 from '../../assets/restaurantes/restaurante03.png';
import estilos from '../TelaRestaurantes/estilos'

export default function TelaRestaurantes(){
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Bares e Restaurantes</Text>
            <Text style={estilos.texto}>O prazer de boa comida você encontra em Paraty. Com inúmeras opçõe de Restaurantes, a cidade oferece o melhor da culinária internacional, juntamente a soborosa cozinha caiçara. Confira alguns bares e Restaurantes mais famosos:</Text>
            <View style={estilos.card}>
                <Image style={estilos.img} source={Restaurante01}/>
                <Text style={estilos.subtitulo}>Armazém Mar</Text>
                <Text style={estilos.descricao}>Localização, Rio Santos</Text>
            </View>
            <View style={estilos.card}>
                <Image style={estilos.img} source={Restaurante02}/>
                <Text style={estilos.subtitulo}>Bendita's Resturantes</Text>
                <Text style={estilos.descricao}>Localização centro Histórico</Text>
            </View>
            <View style={estilos.card}>
                <Image style={estilos.img} source={Restaurante03}/>
                <Text style={estilos.subtitulo}>Seria do mar Pizza-bar</Text>
                <Text style={estilos.descricao}>Localização Praia do jabaquera</Text>
                </View>
        </View>
    )
}
