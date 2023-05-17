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

const GuardarPacientes = ({ navigation }) => {
    const [validarDniPaciente, setvalidarDniPaciente] = useState(false);
    const [dni, setDniPaciente] = useState(false);
    const [validarNombrePaciente, setvalidarNombrePaciente] = useState(false);
    const [nombre, setNombrePaciente] = useState(false);
    const [validarDireccionPaciente, setvalidarDireccionPaciente] = useState(false);
    const [direccion, setDireccionPaciente] = useState(false);
    const [validarGeneroPaciente, setvalidarGeneroPaciente] = useState(false);
    const [genero, setGeneroPaciente] = useState(false);
    const [validarfechaPaciente, setvalidarfechaPaciente] = useState(false);
    const [fechaNacimiento, setfechaNacimiento] = useState(false);
    const [validarEdadPaciente, setvalidarEdadPaciente] = useState(false);
    const [edad, setEdadPaciente] = useState(false);
    const [validarTipoSangre, setvalidarTipoSangre] = useState(false);
    const [tipoSangre, setTipoSangre] = useState(false);
    const [espera, setEspera] = useState(false);
    const titulo='Guardar Pacientes';

    useEffect(() => {

        if (!dni) {
            setvalidarDniPaciente(true);
        }
        else {
            setvalidarDniPaciente(false);
        }

        if (!nombre) {
            setvalidarNombrePaciente(true);
        }
        else {
            setvalidarNombrePaciente(false);
        }

        if (!direccion) {
            setvalidarDireccionPaciente(true);
        }
        else {
            setvalidarDireccionPaciente(false);
        }

        if (!genero) {
            setvalidarGeneroPaciente(true);
        }
        else {
            setvalidarGeneroPaciente(false);
        }

        if (!fechaNacimiento) {
            setvalidarfechaPaciente(true);
        }
        else {
            setvalidarfechaPaciente(false);
        }

        if (!edad) {
            setvalidarEdadPaciente(true);
        }
        else {
            setvalidarEdadPaciente(false);
        }

        if (!tipoSangre) {
            setvalidarTipoSangre(true);
        }
        else {
            setvalidarTipoSangre(false);
        }


    }, [dni, nombre, direccion, genero, fechaNacimiento,  edad, tipoSangre]);
    
    const GuardarPaciente = async () => {
        console.log(nombre);
        
        if (nombre) {
            await Axios.post(
                '/pacientes/guardar',
                {
                    dni: dni,
                    nombre: nombre,
                    direccion: direccion,
                    genero: genero,
                    fechaNacimiento: fechaNacimiento,
                    edad: edad,
                    tipoSangre: tipoSangre,
                }
            ).then((data) => {
                const json = data.data;
                console.log(json);
                Alert.alert('Guardar Pacientes', 'Se guardó con exito');
            }).catch((er) => {
                console.log(er);
                Alert.alert('Error al Guardar', 'Error al conectar con la API');
            });
        }
        else {
            Alert.alert('Guardar Pacientes', 'Se deben ingresar los datos correctamente');
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
                                <TextInput style={validarDniPaciente ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba el dni del paciente'
                                    placeholderTextColor='green'
                                    value={dni}
                                    onChangeText={setDniPaciente}
                                >
                                </TextInput>
                                {
                                    validarDniPaciente ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>

                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarNombrePaciente ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba el nombre del paciente'
                                    placeholderTextColor='green'
                                    value={nombre}
                                    onChangeText={setNombrePaciente}
                                >
                                </TextInput>
                                {
                                    validarNombrePaciente ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>

                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarDireccionPaciente ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba la direccion del paciente'
                                    placeholderTextColor='green'
                                    value={direccion}
                                    onChangeText={setDireccionPaciente}
                                >
                                </TextInput>
                                {
                                    validarDireccionPaciente ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>

                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarGeneroPaciente ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba el genero del paciente'
                                    placeholderTextColor='green'
                                    value={genero}
                                    onChangeText={setGeneroPaciente}
                                >
                                </TextInput>
                                {
                                    validarGeneroPaciente ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>
                            
                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarfechaPaciente ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba su fecha de nacimiento'
                                    placeholderTextColor='green'
                                    value={fechaNacimiento}
                                    onChangeText={setfechaNacimiento}
                                >
                                </TextInput>
                                {
                                    validarfechaPaciente ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>

                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarEdadPaciente ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba su edad'
                                    placeholderTextColor='green'
                                    value={edad}
                                    onChangeText={setEdadPaciente}
                                >
                                </TextInput>
                                {
                                    validarEdadPaciente ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>
                            
                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarTipoSangre ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba su tipo de sangre'
                                    placeholderTextColor='green'
                                    value={tipoSangre}
                                    onChangeText={setTipoSangre}
                                >
                                </TextInput>
                                {
                                    validarTipoSangre ? (
                                        <>
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
                                        onPress={GuardarPaciente}                                  ></Button>
                                </View>
                                <View style={Estilos.boton}>
                                    <Button
                                        title='Limpiar'
                                        color={'red'}
                                        onPress={GuardarPaciente}
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
export default GuardarPacientes;