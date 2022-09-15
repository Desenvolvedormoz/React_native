import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    img: {
        width: 300,
        height: 50,
        marginEnd: 10,
    },

    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#beceff',
    },

    titulo: {
       fontSize: 20,
       fontWeight: 'bold',
       textAlign: 'center',
       marginBottom: 10,
    }, 

    descricao: {
        textAlign: 'center',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        width: 320,
        marginBottom: 5,
        padding: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#979797'
    },

    subtitulo: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    }

})
export default estilos;