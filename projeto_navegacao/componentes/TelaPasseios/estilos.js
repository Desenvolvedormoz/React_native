import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    img:{
        width: 320,
        height: 80,
    },

    container: {
        width: '100%',
        height: '100%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5
    },

    descricao: {
        textAlign: 'center',
        marginBottom: 20,
    },

    container_1: {
        backgroundColor: '#fff',
        padding: 10,
        marginBottom: 5,
        borderRadius: 5,
        borderWidth: 1, 
        borderColor: '#979797'

    }
    ,
    subtitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    }
});
export default estilos;