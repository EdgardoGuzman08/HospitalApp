import { View,Text, Image, StyleSheet } from 'react-native';
import React, {useState, useEffect, useContext} from 'react';

const Tipos = (props) =>{
  return (
    <View style={styles.contenedorTipo}>
      <View style={styles.contenedorTexto}>
        <Text>Dni: {props.tipo.dni}</Text>
        <Text>Nombre: {props.tipo.nombre}</Text>
        <Text>Direccion: {props.tipo.direccion}</Text>
        <Text>Genero: {props.tipo.genero}</Text>
        <Text>Edad: {props.tipo.edad}</Text>
        <Text>TipoSangre: {props.tipo.tipoSangre}</Text>
        </View>
    </View>
  )
}

export default Tipos;

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