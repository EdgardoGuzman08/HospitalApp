import { StyleSheet, Text, View, Button, ImageBackground, TextInput, Alert } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Estilos from '../componetes/Estilos';
import wallhaven from '../../assets/wallhaven.jpg';
import Axios from '../componetes/Axios';
import UsuarioContext from '../contexto/UsuarioContext';
import Cargando from '../componetes/Cargando';

const ListaUsuarios = ({ navigation }) => {
    const [usuario, setUsuario] = useState(null);
    const [contrasena, setContrasena] = useState(null);
    const [validarUsuario, setValidarUsuario] = useState(false);
    const [validarContrasena, setValidarContrasena] = useState(false);
    const { setLogin } = useContext(UsuarioContext);
    const [espera, setEspera] = useState(false);
    const titulo = 'Lista de usuarios';
    useEffect(() => {
        if (!usuario) {
            setValidarUsuario(true);
        }
        else if (usuario.length < 3) {
            setValidarUsuario(true);
        }
        else {
            setValidarUsuario(false);
        }
        if (!contrasena) {
            setValidarContrasena(true);
        }
        else if (contrasena.length < 6) {
            setValidarContrasena(true);
        }
        else {
            setValidarContrasena(false);
        }
    }, [usuario, contrasena]);
    const iniciarSesion = async () => {
        console.log(usuario);
        if (!validarUsuario && !validarContrasena) {
            setEspera(true);
            await setLogin({ usuario: usuario, contrasena: contrasena });
            setEspera(false);
        }
        else {
            Alert.alert('Iniciar Sesion', 'Debe enviar los datos correctos');
        }
    };
    return (
        <View style={Estilos.contenedorPrincipal}>
            <View style={Estilos.contenedorTitulo}>
                <ImageBackground
                    source={wallhaven}
                    resizeMode='stretch'
                    style={Estilos.imagenFondo}
                >
                    <Text style={Estilos.textoTitulo}>{titulo}</Text>
                </ImageBackground>
            </View>
            <View style={Estilos.contenedorContenido}>
                {
                    espera ? (
                        <Cargando></Cargando>
                    ) : (
                        <>
                            <View style={Estilos.contenedorControles}>
                                <Text style={Estilos.etiqueta}>Usuario</Text>
                                <TextInput style={validarUsuario ? Estilos.entradaError : Estilos.entrada}
                                    placeholder='Escriba el correo o usuario'
                                    value={usuario}
                                    onChangeText={setUsuario}
                                >
                                </TextInput>
                                {
                                    validarUsuario ? (
                                        <>
                                            <Text style={Estilos.etiquetaError}>Dede escribir el usuario</Text>
                                        </>

                                    ) : (
                                        <>
                                        </>
                                    )
                                }
                            </View>
                            <View style={Estilos.contenedorControles}>
                                <Text style={Estilos.etiqueta}>Contraseña</Text>
                                <TextInput style={validarContrasena ? Estilos.entradaError : Estilos.entrada}
                                    placeholder='Escriba la contraseña'
                                    secureTextEntry={true}
                                    value={contrasena}
                                    onChangeText={setContrasena}
                                >
                                </TextInput>
                                {
                                    validarContrasena ? (
                                        <>
                                            <Text style={Estilos.etiquetaError}>Debe escribir la contrasena</Text>
                                        </>
                                    ) : (<></>)
                                }
                            </View>
                            <View style={Estilos.contenedorBotones}>
                                <View style={Estilos.boton}>
                                    <Button
                                        title='Entrar'
                                        color={'#000'}
                                        onPress={iniciarSesion}
                                    ></Button>
                                </View>
                                <View style={Estilos.boton}>
                                    <Button
                                        title='Salir'
                                        color={'red'}
                                    ></Button>
                                </View>
                            </View>
                        </>
                    )
                }

            </View>
        </View>
    );
}
export default ListaUsuarios;