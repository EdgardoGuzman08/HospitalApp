import { StyleSheet, Text, View, Button, ImageBackground, TextInput, Alert, Pressable } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DateTimePicker  from '@react-native-community/datetimepicker';
import moment from 'moment';
import Estilos from '../componetes/Estilos';
import ginecologia from '../../assets/ginecologia.jpg';
import cardio from '../../assets/cardio.png';
import pasillo from '../../assets/pasillo.jpg';
import Axios from '../componetes/Axios';
import UsuarioContext from '../contexto/UsuarioContext';
import fondobonito from '../../assets/fondooscuro.jpeg'
import Cargando from '../componetes/Cargando';

const GuardarHorario = ({ navigation }) => {
    const [validarfechaAtencion, setvalidarfechaAtencion] = useState(false);
    const [fechaAtencion, setfechaAtencion] = useState(false);
    const [validarinicioAtencion, setvalidarinicioAtencion] = useState(false);
    const [inicioAtencion, setinicioAtencion] = useState(false);
    const [validarfinAtencion, setvalidarDireccionPaciente] = useState(false);
    const [finAtencion, setfinAtencion] = useState(false);
    const [validarMedicoId, setvalidarMedicoId] = useState(false);
    const [MedicoId, setMedicoId] = useState(false);
    const [espera, setEspera] = useState(false);
    const titulo='Guardar Horarios';
    useEffect(() => {

        if (!fechaAtencion) {
            setvalidarfechaAtencion(true);
        }
        else {
            setvalidarfechaAtencion(false);
        }

        if (!inicioAtencion) {
            setvalidarinicioAtencion(true);
        }
        else {
            setvalidarinicioAtencion(false);
        }

        if (!finAtencion) {
            setvalidarDireccionPaciente(true);
        }
        else {
            setvalidarDireccionPaciente(false);
        }

        if (!MedicoId) {
            setvalidarMedicoId(true);
        }
        else {
            setvalidarMedicoId(false);
        }

    }, [fechaAtencion, inicioAtencion, finAtencion, MedicoId]);
    
    const GuardarPacientes = async () => {
        console.log(inicioAtencion);
        
        if (inicioAtencion) {
            await Axios.post(
                '/horarios/guardar',
                {
                    fechaAtencion: fechaAtencion,
                    inicioAtencion: inicioAtencion,
                    finAtencion: finAtencion,
                    MedicoId: MedicoId,
                }
            ).then((data) => {
                const json = data.data;
                console.log(json);
                Alert.alert('Guardar Horarios', 'Se guardó con exito');
            }).catch((er) => {
                console.log(er);
                Alert.alert('Error al Guardar', 'Error al conectar con la API');
            });
        }
        else {
            Alert.alert('Guardar Horarios', 'Se deben ingresar los datos correctamente');
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
                                <TextInput style={validarfechaAtencion ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba yyy-mm-dd'
                                    placeholderTextColor='green'
                                    value={fechaAtencion}
                                    onChangeText={setfechaAtencion}
                                >
                                </TextInput>
                                {
                                    validarfechaAtencion ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>

                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarinicioAtencion ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba la hora inicial hh:mm:ss'
                                    placeholderTextColor='green'
                                    value={inicioAtencion}
                                    onChangeText={setinicioAtencion}
                                >
                                </TextInput>
                                {
                                    validarinicioAtencion ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>

                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarfinAtencion ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba la hora final hh:mm:ss'
                                    placeholderTextColor='green'
                                    value={finAtencion}
                                    onChangeText={setfinAtencion}
                                >
                                </TextInput>
                                {
                                    validarfinAtencion ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>
                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarMedicoId ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba el id del medico responsable'
                                    placeholderTextColor='green'
                                    value={MedicoId}
                                    onChangeText={setMedicoId}
                                >
                                </TextInput>
                                {
                                    validarMedicoId ? (
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
                                        onPress={GuardarPacientes}                                  ></Button>
                                </View>
                                <View style={Estilos.boton}>
                                    <Button
                                        title='Limpiar'
                                        color={'red'}
                                        onPress={GuardarPacientes}
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
export default GuardarHorario;