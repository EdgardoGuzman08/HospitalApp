import { View,Text, Image, StyleSheet } from 'react-native';
import React, {useState, useEffect, useContext} from 'react';

const Citas= (props) =>{
    return (
    <View style={styles.contenedorTipo}>
        <View style={styles.contenedorTexto}>
            <Text>Id: {props.cita.id}</Text>        
            <Text>Fecha de Cita: {props.cita.fechaAtencion}</Text>
            <Text>Hora Inicial de Cita: {props.cita.inicioAtencion}</Text>
            <Text>Hora Final de Cita: {props.cita.finAtencion}</Text>
            <Text>Paciente a Atender: {props.cita.UsuariosPacienteId}</Text>
            <Text>Medico Responsable: {props.cita.MedicoId}</Text>
            <Text>HorarioId: {props.cita.HorarioId}</Text>
        
        </View>
    </View>
    )
}

export default Citas;

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