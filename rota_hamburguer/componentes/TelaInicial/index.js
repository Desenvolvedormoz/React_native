import React from 'react';
import { Button, View, Text } from 'react-native';

export default function TelaInicial(props){
    return(
        <View>
            <Text>Texto inicial</Text>
            <Button title="Início" onPress={()=>{props.Navigation.navigate('Início')}}/>
        </View>
    )
}