import { View,Text, Image, StyleSheet } from 'react-native';
import React, {useState, useEffect, useContext} from 'react';

const Horarios= (props) =>{
    return (
    <View style={styles.contenedorTipo}>
        <View style={styles.contenedorTexto}>
            <Text>Id: {props.horario.id}</Text>        
            <Text>fehca de Atencion: {props.horario.fechaAtencion}</Text>
            <Text>Horario Inicial: {props.horario.inicioAtencion}</Text>
            <Text>Horario Final: {props.horario.finAtencion}</Text>
            <Text>Medico Responsable: {props.horario.MedicoId}</Text>
        </View>
    </View>
    )
}

export default Horarios;

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