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

const EditarMedicos = ({ navigation }) => {
    const { usuario} = useContext(UsuarioContext);
    const [id, setIdMedico] = useState();
    const [validarIdMedico, setvalidarIdMedico] = useState(false)
    const [validarNombreMedico, setvalidarNombreMedico] = useState(false);
    const [nombre, setNombreMedico] = useState(false);
    const [validarfechaMedico, setvalidarfechaMedico] = useState(false);
    const [fechaNacimiento, setFechaNacimientoMedico] = useState(false);
    const [validarDireccionMedico, setvalidarDireccionMedico] = useState(false);
    const [direccion, setDireccionMedico] = useState(false);
    const [validarGeneroMedico, setvalidarGeneroMedico] = useState(false);
    const [genero, setGeneroMedico] = useState(false);
    const [validarEdadMedico, setvalidarEdadMedico] = useState(false);
    const [edad, setEdadMedico] = useState(false);
    const [validarActivo, setvalidarActivo] = useState(false);
    const [activo, setActivo] = useState(false);
    const [validarEspecialidadeId, setValidarEspecialidadeId] = useState(false);
    const [EspecialidadeId, setEspecialidadeIdMedico] = useState(false);
    const [validarSalaId, setvalidarSalaId] = useState(false);
    const [SalaId, setSalaId] = useState(false);
    const [espera, setEspera] = useState(false);
    const titulo='Editar Medicos';

    useEffect(() => {

        if (!id) {
            setvalidarIdMedico(true);
        }
        else {
            setvalidarIdMedico(false);
        }

        if (!nombre) {
            setvalidarNombreMedico(true);
        }
        else {
            setvalidarNombreMedico(false);
        }

        if (!fechaNacimiento) {
            setvalidarfechaMedico(true);
        }
        else {
            setvalidarfechaMedico(false);
        }

        if (!direccion) {
            setvalidarDireccionMedico(true);
        }
        else {
            setvalidarDireccionMedico(false);
        }

        if (!genero) {
            setvalidarGeneroMedico(true);
        }
        else {
            setvalidarGeneroMedico(false);
        }

        if (!edad) {
            setvalidarEdadMedico(true);
        }
        else {
            setvalidarEdadMedico(false);
        }

        if (!activo) {
            setvalidarActivo(true);
        }
        else {
            setvalidarActivo(false);
        }

        if (!EspecialidadeId) {
            setValidarEspecialidadeId(true);
        }
        else {
            setValidarEspecialidadeId(false);
        }

        if (!SalaId) {
            setvalidarSalaId(true);
        }
        else {
            setvalidarSalaId(false);
        }

    }, [id, nombre, fechaNacimiento, direccion, genero, edad, activo, EspecialidadeId, SalaId]);
    
    const EditarMedicos = async () => {
        console.log(nombre);
        
        if (nombre) {
            await Axios.put(
                '/medicos/editar?id='+id,
                {
                    nombre: nombre,
                    fechaNacimiento: fechaNacimiento,
                    direccion: direccion,
                    genero: genero,
                    edad: edad,
                    activo: activo,
                    EspecialidadeId: EspecialidadeId,
                    SalaId: SalaId,
                }
            ).then((data) => {
                const json = data.data;
                console.log(json);
                Alert.alert('Editar Medicos', 'Se guardó con exito');
            }).catch((er) => {
                console.log(er);
                Alert.alert('Error al Editar', 'Error al conectar con la API');
            });
        }
        else {
            Alert.alert('Editar Medicos', 'Se deben ingresar los datos correctamente');
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
                                <TextInput style={validarIdMedico ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba el id del medico'
                                    placeholderTextColor='green'
                                    value={id}
                                    onChangeText={setIdMedico}
                                >
                                </TextInput>
                                {
                                    validarIdMedico ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>

                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarNombreMedico ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba el nombre del medico'
                                    placeholderTextColor='green'
                                    value={nombre}
                                    onChangeText={setNombreMedico}
                                >
                                </TextInput>
                                {
                                    validarNombreMedico ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>
                            
                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarfechaMedico ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba su fecha de nacimiento'
                                    placeholderTextColor='green'
                                    value={fechaNacimiento}
                                    onChangeText={setFechaNacimientoMedico}
                                >
                                </TextInput>
                                {
                                    validarfechaMedico ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>
                            
                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarDireccionMedico ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba la direccion del medico'
                                    placeholderTextColor='green'
                                    value={direccion}
                                    onChangeText={setDireccionMedico}
                                >
                                </TextInput>
                                {
                                    validarDireccionMedico ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>

                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarGeneroMedico ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba el genero del medico'
                                    placeholderTextColor='green'
                                    value={genero}
                                    onChangeText={setGeneroMedico}
                                >
                                </TextInput>
                                {
                                    validarGeneroMedico ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>

                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarEdadMedico ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba la edad del medico'
                                    placeholderTextColor='green'
                                    value={edad}
                                    onChangeText={setEdadMedico}
                                >
                                </TextInput>
                                {
                                    validarEdadMedico ? (
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
                                <TextInput style={validarEspecialidadeId ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba el id especialidad'
                                    placeholderTextColor='green'
                                    value={EspecialidadeId}
                                    onChangeText={setEspecialidadeIdMedico}
                                >
                                </TextInput>
                                {
                                    validarEspecialidadeId ? (
                                        <>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>

                            <View style={Estilos.contenedorControlesPantalla}>
                                <TextInput style={validarSalaId ? Estilos.entradaError : Estilos.entradaPantalla}
                                    placeholder='Escriba el id sala'
                                    placeholderTextColor='green'
                                    value={SalaId}
                                    onChangeText={setSalaId}
                                >
                                </TextInput>
                                {
                                    validarSalaId ? (
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
                                        onPress={EditarMedicos}                                  ></Button>
                                </View>
                                <View style={Estilos.boton}>
                                    <Button
                                        title='Limpiar'
                                        color={'red'}
                                        onPress={EditarMedicos}
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
export default EditarMedicos;