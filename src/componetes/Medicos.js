import { View,Text, Image, StyleSheet } from 'react-native';
import React, {useState, useEffect, useContext} from 'react';

const Medicos = (props) =>{
    return (
    <View style={styles.contenedorTipo}>
        <View style={styles.contenedorTexto}>
            <Text>Id: {props.medico.id}</Text>        
            <Text>Nombre: {props.medico.nombre}</Text>
            <Text>Fecha Nacimiento: {props.medico.fechaNacimiento}</Text>
            <Text>Direccion: {props.medico.direccion}</Text>
            <Text>Genero: {props.medico.genero}</Text>
            <Text>Edad: {props.medico.edad}</Text>
            <Text>Especialidad: {props.medico.EspecialidadeId}</Text>
        </View>
    </View>
    )
}

export default Medicos;

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