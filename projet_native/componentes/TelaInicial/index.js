import React from 'react';
import { View, Text, Button} from 'react-native';

export default function Telainicial(props){
    return(
        <View>
            <Text>Tela inicial</Text>
            <View>
                <Button title='Trilogia 1' onPress={()=>props.navigation.navigate('Trilogia 1')} />
                <Button title='Trilogia 2' onPress={()=>props.navigation.navigate('Trilogia 2')} />
                <Button title='Trilogia 3' onPress={()=>props.navigation.navigate('Trilogia 3')} />
            </View>
        </View>
    )
}