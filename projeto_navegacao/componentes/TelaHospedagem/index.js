import React from 'react'
import { View, Text, Image } from 'react-native';
import Hospedagem01 from '../../assets/hospedagens/hospedagem01.png';
import Hospedagem02 from '../../assets/hospedagens/hospedagem02.png';
import Hospedagem03 from '../../assets/hospedagens/hospedagem03.png';
import estilos from './estilos';

export default function TelaHospedagem(){
    return(
        <View style={estilos.container}>
            <Text style={estilos.titulo}>Pousadas e hoteis em Paraty</Text>
            <Text style={estilos.descricao}>Paraty conta com exelentes hoteis e Pousadas cujos preços podem variar de R$ 200.00 à R$ 1500.00. Veja algumas Pousadas abaixo:</Text>
            <View style={estilos.card}>
                <Image source={Hospedagem01} style={estilos.img}/>
                <Text style={estilos.subtitulo}>Pousada Missanga</Text>
                <Text >Valor médio R$ 350.00</Text>
                <Text >Localização: Próx.à Av.Roberto Silveira</Text>
            </View>
            <View style={estilos.card}>
                <Image source={Hospedagem02} style={estilos.img}/>
                <Text style={estilos.subtitulo}>Pousada Moro de forte</Text>
                <Text>Valor médio R$ 450.00</Text>
                <Text>Localização: Próximo à praia - pontal</Text>
            </View>
            <View style={estilos.card}>
                <Image source={Hospedagem03} style={estilos.img}/>
                <Text style={estilos.subtitulo}>Pousada Porto imperial</Text>
                <Text>Valor médio R$ 550.00</Text>
                <Text>Localização: Centro Histórico</Text>
            </View>
        </View>
    )
}
