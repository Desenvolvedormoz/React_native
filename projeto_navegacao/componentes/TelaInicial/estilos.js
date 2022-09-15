import { Button, StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
         width: '100%',
         height: '100%',
         alignItems: 'center',
         justifyContent: "center",
         backgroundColor: '#e1e3e4'
    },

    container_2: {
        width: 320,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
        borderColor: '#979797',
        borderWidth: 1,
    },

    titulo: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10
    },

    texto: {
        textAlign: "center",
        marginBottom: 20,
    },

    img: {
        width: 300,
        height: 200,
        marginBottom: 20,
    },
    
    butao: {
        marginBottom: 10,
        color: 'red',
        backgroundColor: '#372d00',
    }

})

export default estilos;