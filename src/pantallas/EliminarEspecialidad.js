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
import { urlborrar } from '../configuracion/Urls';

const EliminarEspecialidad = ({ navigation }) => {
    const { usuario} = useContext(UsuarioContext);
    const [id, setId] = useState()
    const [validarId, setValidarId] = useState(false)
    useEffect(()=>{
        if (!id) {
            setValidarId(true);
        }
        else {
            setValidarId(false);
        }

        },[id]);

    const titulo='Eliminar Especialidades';

    const EliminarEspecialidades= async()=>{
        console.log(id)

        if (!validarId) {
            await Axios.delete(
                '/especialidades/eliminar?id='+id
                
            ).then((data) => {
                const json = data.data;
                console.log(json);
                Alert.alert('Eliminar Especialidades', 'Se elimino con exito');
            }).catch((er) => {
                console.log(er);
                Alert.alert('Error al Eliminar', 'Error al conectar con la API');
            });
        }
        else {
            Alert.alert('Eliminar Especialidades', 'Se deben ingresar los datos correctamente');
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
            
            <View style={Estilos.contenedorContenido}>
                <ImageBackground
                    source={fondobonito}
                    resizeMode='stretch'
                    style={Estilos.fondoPantalla}

                >
                        <Text style={Estilos.textoTitulo}>{titulo}</Text>
                        <View style={Estilos.contenedorControlesPantalla}>
                        <TextInput style={validarId? Estilos.entradaError : Estilos.entradaPantalla1}
                            placeholder='Escriba el id'
                            placeholderTextColor='green'
                            value={id}
                            onChangeText={setId}
                        >
                        </TextInput>
                        {
                            validarId? (
                                <>
                                <Text style={Estilos.etiquetaError}>Dede escribir el id</Text>
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
                                        title='Eliminar'
                                        color={'#000'}
                                        onPress={EliminarEspecialidades}
                                    ></Button>
                                </View>
                            </View>
                </ImageBackground>
            </View>
        </View>
    );
}
export default EliminarEspecialidad;