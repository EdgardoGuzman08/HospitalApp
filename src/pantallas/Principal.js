import { StyleSheet, Text, View, Button, ImageBackground, TextInput, Alert, Pressable } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Estilos from '../componetes/Estilos';
import ginecologia from '../../assets/ginecologia.jpg';
import cardio from '../../assets/cardio.png';
import pasillo from '../../assets/pasillo.jpg';
import Axios from '../componetes/Axios';
import UsuarioContext from '../contexto/UsuarioContext';
import fondobonito from '../../assets/fondooscuro.jpeg'
import Cargando from '../componetes/Cargando';

const Principal = ({ navigation }) => {
    const { usuario, setCerrarSesion } = useContext(UsuarioContext);
    const titulo='Pantalla de Inicio';
    const cerrarSesion = async () => {
        await setCerrarSesion();
    };
    return (
        <View style={Estilos.contenedorPrincipal}>
            
            <View style={Estilos.contenedorTitulo}>
                
                <ImageBackground
                    source={pasillo}
                    resizeMode='stretch'
                    style={Estilos.imagenFondo}
                >   
                    <View style={Estilos.contenedorBotonesA}>
                    <View style={Estilos.botonInicio1}>
                                    <Ionicons.Button 
                                    name="log-in-sharp" 
                                    backgroundColor="red" 
                                    onPress={cerrarSesion}
                                    color= "#fff"
                                    size={32}
                                    >
                                    </Ionicons.Button>
        
                                </View>
                                <View style={Estilos.botonInicio}>
                                    <Ionicons.Button 
                                    name="md-menu-sharp" 
                                    backgroundColor="blue" 
                                    onPress={() => navigation.openDrawer()} 
                                    color= "#fff"
                                    size={32}
                                    >
                                    </Ionicons.Button>
        
                                </View>
                        </View>
                </ImageBackground>
                
            </View>
            
            <View style={Estilos.contenedorContenido}>
                <ImageBackground
                source={fondobonito}
                resizeMode='stretch'
                style={Estilos.fondoPantalla}
                >
                <Text style={Estilos.textoTitulo}>{titulo}</Text>
                    <Text style={Estilos.parrafos}>
                    Somos el hospital de especialidades más completo, moderno y 
                    cercano en la región de San Pedro Sula. Estamos a tu lado para
                    brindarte una atención cálida, confiable y profesional a ti y a tus 
                    familiares.
                    </Text>

                <Text style={Estilos.subTitulo}>Nuestras especialidades</Text>
                <View style={Estilos.contenedorFotos}>
                    <ImageBackground
                    source={cardio}
                    resizeMode='stretch'
                    style={Estilos.espiFondo}
                    >
                    </ImageBackground>
    
                    <ImageBackground
                    source={ginecologia}
                    resizeMode='stretch'
                    style={Estilos.espiFondo}
                    >
                    </ImageBackground>
                </View>
                <View style={Estilos.contenedorBotonesP}>
                    <View style={Estilos.boton2}>
                        <Button
                            title='Cardiologia'
                            color={'#000'}
                        ></Button>
                    </View>
                    <View style={Estilos.boton2}>
                        <Button
                            title='Ginecologia'
                            color={'#000'}
                        ></Button>
                    </View>
                </View>
                </ImageBackground>
            </View>
        </View>
    );
}
export default Principal;