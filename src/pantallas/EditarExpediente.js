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

const EditarExpedientes = ({ navigation }) => {
    const [validarIdSala, setvalidarIdSala] = useState(false);
    const [id, setIdSala] = useState(false);
    const [validardiagnostico, setvalidardiagnostico] = useState(false);
    const [diagnostico, setdiagnostico] = useState(false);
    const [validartratamiento, setvalidartratamiento] = useState(false);
    const [tratamiento, settratamiento] = useState(false);
    const [validarUsuariosPacienteId, setvalidarUsuariosPacienteId] = useState(false);
    const [UsuariosPacienteId, setUsuariosPacienteId] = useState(false);
    const [validarMedicoId, setvalidarMedicoId] = useState(false);
    const [MedicoId, setMedicoId] = useState(false);
    const [espera, setEspera] = useState(false);
    const titulo='Editar Expedientes';

    useEffect(() => {

        if (!id) {
            setvalidarIdSala(true);
        }
        else{
            setvalidarIdSala(false);
        }

        if (!diagnostico) {
            setvalidardiagnostico(true);
        }
        else {
            setvalidardiagnostico(false);
        }

        if (!tratamiento) {
            setvalidartratamiento(true);
        }
        else {
            setvalidartratamiento(false);
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


    }, [id, diagnostico, tratamiento, UsuariosPacienteId, MedicoId]);
    
    const EditarExpediente = async () => {
        console.log(diagnostico);
        
        if (diagnostico) {
            await Axios.put(
                '/expedientes/editar?id='+id,
                {   
                    diagnostico: diagnostico,
                    tratamiento: tratamiento,
                    UsuariosPacienteId: UsuariosPacienteId,
                    MedicoId: MedicoId
                }
            ).then((data) => {
                const json = data.data;
                console.log(json);
                Alert.alert('Editar Expediente', 'Se edito con exito');
            }).catch((er) => {
                console.log(er);
                Alert.alert('Error al Guardar', 'Error al conectar con la API');
            });
        }
        else {
            Alert.alert('Editar Expediente', 'Se deben ingresar los datos correctamente');
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
                                <TextInput style={validarIdSala ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba id de la sala'
                                    placeholderTextColor='green'
                                    value={id}
                                    onChangeText={setIdSala}
                                >
                                </TextInput>
                                {
                                    validarIdSala ? (
                                        <>
                                            <Text style={Estilos.etiquetaError}>Dede escribir el id de la sala</Text>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>
                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validardiagnostico ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba el diagnostico'
                                    placeholderTextColor='green'
                                    value={diagnostico}
                                    onChangeText={setdiagnostico}
                                >
                                </TextInput>
                                {
                                    validardiagnostico ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>
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
                                        onPress={EditarExpediente}
                                    ></Button>
                                </View>
                                <View style={Estilos.boton}>
                                    <Button
                                        title='Limpiar'
                                        color={'red'}
                                        onPress={EditarExpediente}
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
export default EditarExpedientes;