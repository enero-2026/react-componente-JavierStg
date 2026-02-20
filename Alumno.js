import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function Alumno({ nombre, matricula, foto, posicion = 'izq', style }) {
    return (
        <View style ={[styles.contenedor, style]}>
            {posicion === 'izq' && <Image source={foto} style={styles.imagen} />}
            <View style={styles.texto}>
                <Text style ={styles.nombre}>{nombre}</Text>
                <Text style = {styles.matricula}>{matricula}</Text>

            </View>
            {posicion === 'der' && <Image source={foto} style={styles.imagen} />}
        </View>
    );
}
const styles = StyleSheet.create({
    contenedor : {
        flexDirection: 'row',
        padding: 15,
        backgroundColor : '#f2f2f2',
        alignItems: 'center',
        borderRadius: 10,
        marginBottom : 10,
    },

    imagen: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginHorizontal: 10,
    },

    texto: {
        flex: 1,
    },

    nombre : {
        fontSize: 18,
        fontWeight: 'bold',
        color :'#b91eb9',
    },

    matricula : {
        fontSize : 18,
        fontWeight: 'bold',
        color :'#b91eb9',
    },
});