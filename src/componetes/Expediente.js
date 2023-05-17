import { View,Text, Image, StyleSheet } from 'react-native';
import React, {useState, useEffect, useContext} from 'react';

const Expedientes= (props) =>{
    return (
    <View style={styles.contenedorTipo}>
        <View style={styles.contenedorTexto}>
            <Text>Id: {props.expediente.id}</Text>        
            <Text>Enfermedad Diagnosticada: {props.expediente.diagnostico}</Text>
            <Text>Tratamiento: {props.expediente.tratamiento}</Text>
            <Text>Paciente Atendido: {props.expediente.UsuariosPacienteId}</Text>
            <Text>Medico Responsable: {props.expediente.MedicoId}</Text>
        </View>
    </View>
    )
}

export default Expedientes;

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