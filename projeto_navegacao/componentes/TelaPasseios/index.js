import React from 'react'
import { View, Text, Image } from 'react-native';
import estilos from '../TelaPasseios/estilos';
import Passeios01 from '../../assets/passeios/passeio01.png';
import Passeios02 from '../../assets/passeios/passeio02.png';
import Passeios03 from '../../assets/passeios/passeio03.png'

export default function TelaPasseios(props){
    return(
        <View style ={estilos.container}>
            <Text style={estilos.titulo}>Passeios em Paraty</Text>
            <Text style={estilos.descricao}>O munincípio de Paraty está quase inteiro em área de parques e de preservação abiental. Muitas são as opçõe de passeio para quem curte a natureza: passeios de jeep, de bike caminhadas por trilhas entre outros. veja exemplos: Tiloresa</Text>

            <View style={estilos.container_1}>
                <Text style={estilos.subtitulo}>Tiloresa</Text>
                <Image style={estilos.img} source={Passeios01}/>   
            </View>
            <View style={estilos.container_1}>
                <Text style={estilos.subtitulo}>Rafting</Text>
                <Image style={estilos.img} source={Passeios02}/>    
            </View>

            <View style={estilos.container_1}>
                <Text style={estilos.subtitulo}>Canoagem no Mangue</Text>
                <Image style={estilos.img} source={Passeios03}/>   
            </View>
        </View>
    )
}
