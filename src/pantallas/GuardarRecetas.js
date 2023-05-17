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

const GuardarReceta = ({ navigation }) => {
    const [validartratamiento, setvalidartratamiento] = useState(false);
    const [tratamiento, settratamiento] = useState(false);
    const [validaredad, setvalidaredad] = useState(false);
    const [edad, setedad] = useState(false);
    const [validarfechaEmitida, setvalidarfechaEmitida] = useState(false);
    const [fechaEmitida, setfechaEmitida] = useState(false);
    const [validarUsuariosPacienteId, setvalidarUsuariosPacienteId] = useState(false);
    const [UsuariosPacienteId, setUsuariosPacienteId] = useState(false);
    const [validarMedicoId, setvalidarMedicoId] = useState(false);
    const [MedicoId, setMedicoId] = useState(false);
    const [espera, setEspera] = useState(false);
    const titulo='Guardar Recetas';

    useEffect(() => {

        if (!tratamiento) {
            setvalidartratamiento(true);
        }
        else {
            setvalidartratamiento(false);
        }

        if (!edad) {
            setvalidaredad(true);
        }
        else {
            setvalidaredad(false);
        }

        if (!fechaEmitida) {
            setvalidarfechaEmitida(true);
        }
        else {
            setvalidarfechaEmitida(false);
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


    }, [tratamiento, edad, fechaEmitida, UsuariosPacienteId, MedicoId]);
    
    const GuardarReceta = async () => {
        console.log(tratamiento);
        
        if (tratamiento) {
            await Axios.post(
                '/recetas/guardar',
                {
                    tratamiento: tratamiento,
                    edad: edad,
                    fechaEmitida: fechaEmitida,
                    UsuariosPacienteId: UsuariosPacienteId,
                    MedicoId: MedicoId
                }
            ).then((data) => {
                const json = data.data;
                console.log(json);
                Alert.alert('Guardar Recetas', 'Se guardó con exito');
            }).catch((er) => {
                console.log(er);
                Alert.alert('Error al Guardar', 'Error al conectar con la API');
            });
        }
        else {
            Alert.alert('Guardar Recetas', 'Se deben ingresar los datos correctamente');
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
                                <TextInput style={validartratamiento ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba el tratamiento de la receta'
                                    placeholderTextColor='green'
                                    value={tratamiento}
                                    onChangeText={settratamiento}
                                >
                                </TextInput>
                                {
                                    validartratamiento ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>

                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validaredad ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba el edad del paciente'
                                    placeholderTextColor='green'
                                    value={edad}
                                    onChangeText={setedad}
                                >
                                </TextInput>
                                {
                                    validaredad ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>

                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarfechaEmitida ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba fecha Emitida de la receta'
                                    placeholderTextColor='green'
                                    value={fechaEmitida}
                                    onChangeText={setfechaEmitida}
                                >
                                </TextInput>
                                {
                                    validarfechaEmitida ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>

                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarUsuariosPacienteId? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba el id del paciente'
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
                                <TextInput style={validarMedicoId? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba el id del medico'
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
                                        onPress={GuardarReceta}
                                    ></Button>
                                </View>
                                <View style={Estilos.boton}>
                                    <Button
                                        title='Limpiar'
                                        color={'red'}
                                        onPress={GuardarReceta}
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
export default GuardarReceta;