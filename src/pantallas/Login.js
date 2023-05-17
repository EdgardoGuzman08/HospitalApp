import { StyleSheet, Text, View, Button, ImageBackground, TextInput, Alert, TouchableOpacity } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';      //useState son variables de estado
//import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Estilos from '../componetes/Estilos';
import wallhaven from '../../assets/wallhaven.jpg';
import cruz1 from '../../assets/logo4.png';
import fondo3 from '../../assets/fondo3.jpg';
import Axios from '../componetes/Axios';
import UsuarioContext from '../contexto/UsuarioContext';


const Login = () => {     //el nombre y la constante del componenente se llaman igual
    //variables de estado con su metodo
    const [usuario, setUsuario] = useState(null);
    const [contrasena, setContrasena] = useState(null);
    const [validarUsuario, setValidarUsuario] = useState(false);
    const [validarContrasena, setValidarContrasena] = useState(false);
    const { setLogin, setLoginUsuario } = useContext(UsuarioContext);
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
    }, [usuario, contrasena]);            //Cuando se llame a usuario se ejecutará todo el useEffect

    const iniciarSesion = async() => {
        console.log(usuario);
        if (!validarUsuario && !validarContrasena) {
            await setLogin({usuario: usuario, contrasena: contrasena});
        }
        else{
            Alert.alert('Iniciar Sesion', 'Debe enviar datos correctos'); 
        }
    };
    const iniciarSesionUsuario = async() => {
        console.log(usuario);
        if (!validarUsuario && !validarContrasena) {
            await setLoginUsuario({usuario: usuario, contrasena: contrasena});
        }
        else{
            Alert.alert('Iniciar Sesion', 'Debe enviar datos correctos'); 
        }
    };

    return (
        //Titulo
        <View style={Estilos.contenedorPrincipal}>
            <View style={Estilos.contenedorTitulo}>
                <ImageBackground
                    source={cruz1}
                    resizeMode='stretch'
                    style={Estilos.imagenFondoLogin}
                >
                    
                </ImageBackground>
            </View>

            <View style={Estilos.contenedorContenidoL}>
            <ImageBackground
                    source={fondo3}
                    resizeMode='stretch'
                    style={Estilos.fondoPantalla}
                >
                    <TouchableOpacity style={Estilos.textotitulocontenedor}
                        disabled={true}
                    >
                    <Text style={Estilos.textoTitulo1}>Hospital Buena Vista</Text>
                    </TouchableOpacity>
                
                    <View style={Estilos.contenedorControlesL}>
                        <FontAwesome style={Estilos.searchIcon} name="user" size={35} ></FontAwesome>
                    <TextInput style={validarUsuario ? Estilos.entradaErrorlogin : Estilos.entradaLogin}
                        
                        placeholder='Escriba el correo o usuario              '
                        placeholderTextColor={'#003f5c'}
                        value={usuario}                 //Captura el valor de la caja de texto y lo guarda en la variable
                        onChangeText={setUsuario}>      
                    </TextInput>
                    {
                        //nomenclatura de un if else de forma ? () : ()
                        validarUsuario ? (
                            <>
                            </>
                        ) : (<></>)
                    }

                </View>

                <View style={Estilos.contenedorControlesL}>
                <FontAwesome style={Estilos.searchIcon} name="lock" size={35} ></FontAwesome>
                    <TextInput style={validarContrasena ? Estilos.entradaErrorlogin : Estilos.entradaLogin}
                        placeholder='Escriba su contraseña                      '
                        placeholderTextColor={'#003f5c'}
                        secureTextEntry={true}
                        value={contrasena}
                        onChangeText={setContrasena}>
                        </TextInput>
                    {
                        validarContrasena ? (
                            <>
                            </>
                        ) : (<></>)
                    }
                </View>

                <View style={Estilos.contenedorBotonesLogin}>
    
                    <TouchableOpacity style={Estilos.loginBtn}
                        onPress={iniciarSesion}
                        activeOpacity={false}
                        disabled={false}
                    >
                    <Text style={Estilos.loginText}>LOGIN ADMIN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Estilos.loginBtn}
                        onPress={iniciarSesionUsuario}
                        activeOpacity={false}
                        disabled={false}
                    >
                    <Text style={Estilos.loginText}>LOGIN PACIENTE</Text>
                    </TouchableOpacity>
                </View>
                </ImageBackground>
            </View>
        </View>
    );
}
export default Login;