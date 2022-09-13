import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Trilogia3(props){
    return(
        <View>
            <Text>Trilogia 3</Text>
            <Button title='trilogia 3' onPress={()=> props.navigation.navigate('Trilogia 3')} />
        </View>
    )
}