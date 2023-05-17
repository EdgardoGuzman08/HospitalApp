import { View,Text, Image, StyleSheet } from 'react-native';
import React, {useState, useEffect, useContext} from 'react';

const Especialidad = (props) =>{
    return (
    <View style={styles.contenedorTipo}>
        <View style={styles.contenedorTexto}>
            <Text>Id: {props.especialidad.id}</Text>        
            <Text>Nombre: {props.especialidad.TipoEspecialidad}</Text>
        </View>
    </View>
    )
}

export default Especialidad;

const styles = StyleSheet.create({
    contenedorTipo:{
        backgroundColor: '#fff',
        borderColor: '#6c6dfa',
        borderRadius: 20,
        borderWidth: 5,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
    },
    contenedorTexto:{
        paddingLeft: 40,
    }
})