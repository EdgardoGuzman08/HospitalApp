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

const GuardarSalas = ({ navigation }) => {
    const [validarUbicacion, setvalidarUbicacion] = useState(false);
    const [ubicacion, setUbicacion] = useState(false);
    const [validarDescripcion, setvalidarDescripcion] = useState(false);
    const [descripcion, setDescripcion] = useState(false);
    const [espera, setEspera] = useState(false);
    const titulo='Guardar Salas';

    useEffect(() => {

        if (!ubicacion) {
            setvalidarUbicacion(true);
        }
        else {
            setvalidarUbicacion(false);
        }

        if (!descripcion) {
            setvalidarDescripcion(true);
        }
        else {
            setvalidarDescripcion(false);
        }

    }, [ubicacion, descripcion]);
    
    const GuardarSala = async () => {
        console.log(ubicacion);
        
        if (ubicacion) {
            await Axios.post(
                '/salas/guardar',
                {
                    ubicacion: ubicacion,
                    descripcion: descripcion
                }
            ).then((data) => {
                const json = data.data;
                console.log(json);
                Alert.alert('Guardar Sala', 'Se guardó con exito');
            }).catch((er) => {
                console.log(er);
                Alert.alert('Error al Guardar', 'Error al conectar con la API');
            });
        }
        else {
            Alert.alert('Guardar Sala', 'Se deben ingresar los datos correctamente');
        }
    }
    
    return (
        <View style={Estilos.contenedorPrincipal}>
            
            <View style={Estilos.contenedorTitulo}>
                
                <ImageBackground
                    source={pasillo}
                    resizeMode='stretch'
                    style={Estilos.imagenFondo}
                >   
                    <View style={Estilos.contenedorBotones}>
    
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
            
            <View style={Estilos.contenedorContenidoPantalla}>
                <ImageBackground
                    source={fondobonito}
                    resizeMode='stretch'
                    style={Estilos.fondoPantalla}
                >
                    <Text style={Estilos.textoTitulo}>{titulo}</Text>
                    {
                    espera ? (
                        <Cargando></Cargando>
                    ) : (
                        <>
                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarUbicacion ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba una sala'
                                    placeholderTextColor='green'
                                    value={ubicacion}
                                    onChangeText={setUbicacion}
                                >
                                </TextInput>
                                {
                                    validarUbicacion ? (
                                        <>
                                            <Text style={Estilos.etiquetaError}>Dede escribir la sala</Text>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>

                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarDescripcion ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba una descripcion'
                                    placeholderTextColor='green'
                                    value={descripcion}
                                    onChangeText={setDescripcion}
                                >
                                </TextInput>
                                {
                                    validarDescripcion ? (
                                        <>
                                            <Text style={Estilos.etiquetaError}>Dede escribir una descripcion</Text>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>
                            

                            <View style={Estilos.contenedorBotones}>
                                <View style={Estilos.boton}>
                                    <Button
                                        title='Guardar'
                                        color={'#000'}
                                        onPress={GuardarSala}
                                    ></Button>
                                </View>
                                <View style={Estilos.boton}>
                                    <Button
                                        title='Limpiar'
                                        color={'red'}
                                        onPress={GuardarSala}
                                    ></Button>
                                </View>
                            </View>
                        </>
                    )
                }
                </ImageBackground>
            </View>
        </View>
    );
}
export default GuardarSalas;