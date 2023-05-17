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

const EditarCitas = ({ navigation }) => {
    const [validarIdCitas, setvalidarIdCitas] = useState(false);
    const [id, setIdCitas] = useState(false);
    const [validarfechaAtencion, setvalidarfechaAtencion] = useState(false);
    const [fechaAtencion, setfechaAtencion] = useState(false);
    const [validarinicioAtencion, setvalidarinicioAtencion] = useState(false);
    const [inicioAtencion, setinicioAtencion] = useState(false);
    const [validarfinAtencion, setvalidarfinAtencion] = useState(false);
    const [finAtencion, setfinAtencion] = useState(false);
    const [validarUsuariosPacienteId, setvalidarUsuariosPacienteId] = useState(false);
    const [UsuariosPacienteId, setUsuariosPacienteId] = useState(false);
    const [validarMedicoId, setvalidarMedicoId] = useState(false);
    const [MedicoId, setMedicoId] = useState(false);
    const [validarHorarioId, setValidarHorarioId] = useState(false);
    const [HorarioId, setHorarioId] = useState(false);
    const [validarActivo, setvalidarActivo] = useState(false);
    const [activo, setActivo] = useState(false);
    const [espera, setEspera] = useState(false);
    const titulo='Editar Citas';

    useEffect(() => {

        if (!id) {
            setvalidarIdCitas(true);
        }
        else {
            setvalidarIdCitas(false);
        }

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
            setvalidarfinAtencion(true);
        }
        else {
            setvalidarfinAtencion(false);
        }

        if (!activo) {
            setvalidarActivo(true);
        }
        else {
            setvalidarActivo(false);
        }

        if (!UsuariosPacienteId) {
            setvalidarUsuariosPacienteId(true);
        }
        else {
            setvalidarUsuariosPacienteId(false);
        }

        if (!MedicoId) {
            setvalidarMedicoId(true);
        }
        else {
            setvalidarMedicoId(false);
        }

        if (!HorarioId) {
            setValidarHorarioId(true);
        }
        else {
            setValidarHorarioId(false);
        }

    }, [id, fechaAtencion, inicioAtencion, finAtencion, activo, UsuariosPacienteId, MedicoId, HorarioId]);
    
    const EditarCita = async () => {
        console.log(fechaAtencion);
        
        if (fechaAtencion) {
            await Axios.put(
                '/citas/editar?id='+id,
                {
                    fechaAtencion: fechaAtencion,
                    inicioAtencion: inicioAtencion,
                    finAtencion: finAtencion,
                    activo: activo,
                    UsuariosPacienteId: UsuariosPacienteId,
                    MedicoId: MedicoId,
                    HorarioId: HorarioId,
                }
            ).then((data) => {
                const json = data.data;
                console.log(json);
                Alert.alert('Editar Citas', 'Se edito con exito');
            }).catch((er) => {
                console.log(er);
                Alert.alert('Error al Guardar', 'Error al conectar con la API');
            });
        }
        else {
            Alert.alert('Editar Citas', 'Se deben ingresar los datos correctamente');
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
                                <TextInput style={validarIdCitas ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba el id de la cita'
                                    placeholderTextColor='green'
                                    value={id}
                                    onChangeText={setIdCitas}
                                >
                                </TextInput>
                                {
                                    validarIdCitas ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>

                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarfechaAtencion ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba la fecha de atencion'
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
                                    placeholder='Escriba la hora de inicio'
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
                                    placeholder='Escriba la hora final de la cita'
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

                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarUsuariosPacienteId ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba el id del usuario'
                                    placeholderTextColor='green'
                                    value={UsuariosPacienteId}
                                    onChangeText={setUsuariosPacienteId}
                                >
                                </TextInput>
                                {
                                    validarUsuariosPacienteId ? (
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
                            
                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarHorarioId ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba el id del horario'
                                    placeholderTextColor='green'
                                    value={HorarioId}
                                    onChangeText={setHorarioId}
                                >
                                </TextInput>
                                {
                                    validarHorarioId ? (
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
                                        onPress={EditarCita}                                  ></Button>
                                </View>
                                <View style={Estilos.boton}>
                                    <Button
                                        title='Limpiar'
                                        color={'red'}
                                        onPress={EditarCita}
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
export default EditarCitas;