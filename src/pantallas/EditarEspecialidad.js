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

const EditarEspecialidades = ({ navigation }) => {
    const [validarIdEspecialidad, setvalidarIdEspecialidad] = useState(false);
    const [id, setIdEspecialidad] = useState(false);
    const [validarTipoEspecialidad, setvalidarTipoEspecialidad] = useState(false);
    const [TipoEspecialidad, setTipoEspecialidad] = useState(false);
    const [validarActivo, setvalidarActivo] = useState(false);
    const [activo, setActivo] = useState(false);
    const [espera, setEspera] = useState(false);
    const titulo='Editar Especialidad';

    useEffect(() => {

        if (!id) {
            setvalidarIdEspecialidad(true);
        }
        else {
            setvalidarIdEspecialidad(false);
        }

        if (!TipoEspecialidad) {
            setvalidarTipoEspecialidad(true);
        }
        else {
            setvalidarTipoEspecialidad(false);
        }

        if (!activo) {
            setvalidarActivo(true);
        }
        else {
            setvalidarActivo(false);
        }

    }, [id, TipoEspecialidad, activo]);
    
    const EditarEspecialidades = async () => {
        console.log(id)
        console.log(TipoEspecialidad);
        if (TipoEspecialidad) {
            await Axios.put(
                '/especialidades/editar?id='+id,
                {
                    TipoEspecialidad: TipoEspecialidad,
                    activo: activo
                }
            ).then((data) => {
                const json = data.data;
                console.log(json);
                Alert.alert('Editar Especialidad', 'Se guardó con exito');
            }).catch((er) => {
                console.log(er);
                Alert.alert('Error al Editar', 'Error al conectar con la API');
            });
        }
        else {
            Alert.alert('Editar Especialidad', 'Se deben ingresar los datos correctamente');
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
                                <TextInput style={validarIdEspecialidad ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba el id'
                                    placeholderTextColor='green'
                                    value={id}
                                    onChangeText={setIdEspecialidad}
                                >
                                </TextInput>
                                {
                                    validarIdEspecialidad ? (
                                        <>
                                            <Text style={Estilos.etiquetaError}>Dede escribir editar la especialidad</Text>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>

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
                            
                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarActivo ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba si esta activo "true o false"'
                                    placeholderTextColor='green'
                                    value={activo}
                                    onChangeText={setActivo}
                                >
                                </TextInput>
                                {
                                    validarActivo ? (
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
                                        title='Editar'
                                        color={'#000'}
                                        onPress={EditarEspecialidades}                                  ></Button>
                                </View>
                                <View style={Estilos.boton}>
                                    <Button
                                        title='Limpiar'
                                        color={'red'}
                                        onPress={EditarEspecialidades}
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
export default EditarEspecialidades;