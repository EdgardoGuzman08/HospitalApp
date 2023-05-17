import { View,Text, Image, StyleSheet } from 'react-native';
import React, {useState, useEffect, useContext} from 'react';

const Recetas= (props) =>{
    return (
    <View style={styles.contenedorTipo}>
        <View style={styles.contenedorTexto}>
            <Text>Id: {props.receta.id}</Text>        
            <Text>Tratamiento: {props.receta.tratamiento}</Text>
            <Text>Fecha Emitida: {props.receta.fechaEmitida}</Text>
            <Text>Paciente: {props.receta.UsuariosPacienteId}</Text>
            <Text>Medico Responsable: {props.receta.MedicoId}</Text>
        </View>
    </View>
    )
}

export default Recetas;

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