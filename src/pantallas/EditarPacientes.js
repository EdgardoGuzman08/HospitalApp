import { StyleSheet, Text, View, Button, ImageBackground, ScrollView, TextInput, Alert, Pressable } from 'react-native';
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

const EditarPacientes = ({ navigation }) => {
    const { usuario} = useContext(UsuarioContext);
    const [id, setIdPaciente] = useState();
    const [validarIdPaciente, setvalidarIdPaciente] = useState(false);
    const [validarDniPaciente, setvalidarDniPaciente] = useState(false);
    const [dni, setDniPaciente] = useState(false);
    const [validarNombrePaciente, setvalidarNombrePaciente] = useState(false);
    const [nombre, setNombrePaciente] = useState(false);
    const [validarfechaNacimiento, setvalidarfechaNacimiento] = useState(false);
    const [fechaNacimiento, setFechaNacimiento] = useState(false);
    const [validarDireccionPaciente, setvalidarDireccionPaciente] = useState(false);
    const [direccion, setDireccionPaciente] = useState(false);
    const [validarGeneroPaciente, setvalidarGeneroPaciente] = useState(false);
    const [genero, setGeneroPaciente] = useState(false);
    const [validarEdadPaciente, setvalidarEdadPaciente] = useState(false);
    const [edad, setEdadPaciente] = useState(false);
    const [validarTipoSangre, setvalidarTipoSangre] = useState(false);
    const [tipoSangre, settipoSangre] = useState(false);
    const [validarActivo, setvalidarActivo] = useState(false);
    const [activo, setActivo] = useState(false);
    const [espera, setEspera] = useState(false);
    const titulo='Editar Pacientes';

    useEffect(() => {

        if (!id) {
            setvalidarIdPaciente(true);
        }
        else {
            setvalidarIdPaciente(false);
        }

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

        if (!fechaNacimiento) {
            setvalidarfechaNacimiento(true);
        }
        else {
            setvalidarfechaNacimiento(false);
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

        if (!activo) {
            setvalidarActivo(true);
        }
        else {
            setvalidarActivo(false);
        }


    }, [id, dni, nombre, fechaNacimiento, direccion, genero, edad, tipoSangre, activo]);
    
    const EditarPaciente = async () => {
        console.log(nombre);
        
        if (nombre) {
            await Axios.put(
                '/pacientes/editar?id='+id,
                {   
                    dni: dni,
                    nombre: nombre,
                    direccion: direccion,
                    genero: genero,
                    fechaNacimiento: fechaNacimiento,
                    edad: edad,
                    tipoSangre: tipoSangre,
                    activo: activo,
                }
            ).then((data) => {
                const json = data.data;
                console.log(json);
                Alert.alert('Editar Pacientes', 'Se guardó con exito');
            }).catch((er) => {
                console.log(er);
                Alert.alert('Error al Editar', 'Error al conectar con la API');
            });
        }
        else {
            Alert.alert('Editar Pacientes', 'Se deben ingresar los datos correctamente');
        }
    }
    
    return (
        <ScrollView>
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
                                <TextInput style={validarIdPaciente ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba el id del paciente'
                                    placeholderTextColor='green'
                                    value={id}
                                    onChangeText={setIdPaciente}
                                >
                                </TextInput>
                                {
                                    validarIdPaciente ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>

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
                                <TextInput style={validarfechaNacimiento ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba su fecha de nacimiento'
                                    placeholderTextColor='green'
                                    value={fechaNacimiento}
                                    onChangeText={setFechaNacimiento}
                                >
                                </TextInput>
                                {
                                    validarfechaNacimiento ? (
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
                                    placeholder='Escriba la edad del medico'
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
                                    onChangeText={settipoSangre}
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

                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarActivo ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba si esta activa'
                                    placeholderTextColor='green'
                                    value={activo}
                                    onChangeText={setActivo}
                                >
                                </TextInput>
                                {
                                    validarActivo ? (
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
                                        onPress={EditarPaciente}                                  ></Button>
                                </View>
                                <View style={Estilos.boton}>
                                    <Button
                                        title='Limpiar'
                                        color={'red'}
                                        onPress={EditarPaciente}
                                    ></Button>
                                </View>
                            </View>
                        </>
                    )
                }
                </ImageBackground>
            </View>
        </View>
        </ScrollView>
    );
}
export default EditarPacientes;