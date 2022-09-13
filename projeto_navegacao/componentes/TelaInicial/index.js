import React from 'react'
import { View, Text, Button, Image } from 'react-native';

export default function TelaInicial(props){
    return(
        <View>
            <Text>Esta é a Página inicial onde vao aparecer as apresentacoes</Text>
            <View>
            <Button title='Vá para Hospedagem' onPress={()=>props.navigation.navigate('Página Hospedagem')} />
            <Button title='Vá Para Passeios' onPress={()=>props.navigation.navigate('Página Passeios')} />
            <Button title='Vá para Restaurantes' onPress={()=>props.navigation.navigate('Página Restaurantes')} />
            </View>
        </View>
    )
}
