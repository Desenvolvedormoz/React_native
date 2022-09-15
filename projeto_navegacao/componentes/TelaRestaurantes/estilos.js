import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    img: {
        width: 300,
        height: 80,
        marginBottom: 5,
    },

    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 5,
    },

    texto: {
        textAlign: 'center',
        marginBottom: 20,
    },

    card: {
        width: 320,
        backgroundColor: '#fff',
        marginBottom: 5,
        padding: 10,
        borderRadius: 5,
        borderColor: '#979797',
        borderWidth: 1,
    },
    subtitulo: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
    }
});
export default estilos;

