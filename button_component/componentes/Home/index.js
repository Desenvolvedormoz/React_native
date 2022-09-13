import React from 'react';
import { Button, View, Text } from 'react-native';

export default function Home(props){
    return(
        <View>
            <Text>Esta é a minha página inicial, desfrute de tudo que tenho a oferecer neste aplicativo.</Text>
            <Button title='Abrir Home' onPress={()=> {props.Navigation.openDrawer()}}/>
        </View>
    )
}