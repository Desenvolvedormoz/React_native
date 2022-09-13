import React from 'react';
import { Button, View, Text } from 'react-native';

export default function Content (props){
    return(
        <View>
            <Text>
                Comece conhecendo esta primeira página. estou criando navegação associando drawer com button.
            </Text>
            <Button title='Abrir conteúdo' onPress={()=>{props.Navigation.openDrawer()}}/>
        </View>
    )
}