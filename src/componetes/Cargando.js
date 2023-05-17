import { Text, View, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';
const Cargando = ({texto}) => {
    return (
        <View style={estilo.contenedor}>
            <ActivityIndicator size="large" color="#000"></ActivityIndicator>
            <View>
                {
                    texto ? (
                        <Text style={estilo.texto_}>{texto}</Text>
                    ):(
                        <Text style={estilo.texto_}>Cargando datos</Text>
                    )
                }
                
            </View>
        </View>
    );
};
const estilo = StyleSheet.create({
    contenedor:{
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center'
    },
    texto_:{
        textAlign: 'center',
        fontSize: 16,
        color: '#000'
    }
});
export default Cargando;