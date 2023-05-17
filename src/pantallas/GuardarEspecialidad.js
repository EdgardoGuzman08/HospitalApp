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

const GuardarEspecialidad = ({ navigation }) => {

    const [validarTipoEspecialidad, setvalidarTipoEspecialidad] = useState(false);
    const [TipoEspecialidad, setTipoEspecialidad] = useState(false);
    const [espera, setEspera] = useState(false);
    const titulo='Guardar Especialidad';

    useEffect(() => {

        if (!TipoEspecialidad) {
            setvalidarTipoEspecialidad(true);
        }
        else {
            setvalidarTipoEspecialidad(false);
        }

    }, [TipoEspecialidad]);
    
    const GuardarEspecialidades = async () => {
        console.log(TipoEspecialidad);
        
        if (TipoEspecialidad) {
            await Axios.post(
                '/especialidades/guardar',
                {
                    TipoEspecialidad: TipoEspecialidad
                }
            ).then((data) => {
                const json = data.data;
                console.log(json);
                Alert.alert('Guardar Especialidad', 'Se guardó con exito');
            }).catch((er) => {
                console.log(er);
                Alert.alert('Error al Guardar', 'Error al conectar con la API');
            });
        }
        else {
            Alert.alert('Guardar Especialidad', 'Se deben ingresar los datos correctamente');
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
                                <TextInput style={validarTipoEspecialidad ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba una especialidad'
                                    placeholderTextColor='green'
                                    value={TipoEspecialidad}
                                    onChangeText={setTipoEspecialidad}
                                >
                                </TextInput>
                                {
                                    validarTipoEspecialidad ? (
                                        <>
                                            <Text style={Estilos.etiquetaError}>Dede escribir el usuario</Text>
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
                                        onPress={GuardarEspecialidades}                                  ></Button>
                                </View>
                                <View style={Estilos.boton}>
                                    <Button
                                        title='Limpiar'
                                        color={'red'}
                                        onPress={GuardarEspecialidad}
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
export default GuardarEspecialidad;