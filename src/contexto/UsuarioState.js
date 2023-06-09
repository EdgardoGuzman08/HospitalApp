import React, { useReducer } from "react"
import UsuarioContext from "./UsuarioContext"
import UsuarioReducer from "./UsuarioReducer"
import Axios from "../componetes/Axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Alert } from "react-native";

const UsuarioState = (props) => {
    const incialState = {
        usuario: null,
        token: null,
        errores: [],
        msj: "",
        sesionIniciada: false,
        tokenValidado: false,
        aplicacionIniciada: false
    }
    const [estado, dispath] = useReducer(UsuarioReducer, incialState)
    const setDatos = async () => {
        
        var sesionIniciada = false;
        var tokenValidado = false;
        const t = (await AsyncStorage.getItem('toke_almacenado'));
        const u = JSON.parse(await AsyncStorage.getItem('usuario_almacenado'));
        if (t) {
            sesionIniciada = true;
            tokenValidado = true;
        }
        dispath({
            datos: {
                usuario: u,
                token: t,
                sesionIniciada: sesionIniciada,
                tokenValidado: tokenValidado
            },
            acciones: 'ACTUALIZAR_DATOS',
        });
    }
    const setCerrarSesion = async () => {
        await AsyncStorage.removeItem('toke_almacenado');
        await AsyncStorage.removeItem('usuario_almacenado');
        dispath({
            datos: {
                usuario: null,
                token: null,
                sesionIniciada: false,
                tokenValidado: false
            },
            acciones: 'ACTUALIZAR_DATOS',
        });
    }
    const setLogin = async (data) => {
        try {
            console.log(data);
            var textoMensaje = "";
            var usuario = null;
            var token = null;
            await Axios.post('/autenticacion/iniciosesion', {
                usuario: data.usuario,
                contrasena: data.contrasena
            })
                .then(async(data) => {
                    const json = data.data;
                    console.log(json);
                    if (json.errores.length == 0) {
                        usuario = json.data.usuario;
                        token = json.data.token;
                        console.log(token);
                        await AsyncStorage.setItem('toke_almacenado', String(token));
                        const u = JSON.stringify(usuario);
                        await AsyncStorage.setItem('usuario_almacenado', u);
                        textoMensaje = 'Bienvenido ' + usuario.nombre;
                    }
                    else {
                        textoMensaje = '';
                        json.errores.forEach(element => {
                            textoMensaje += element.mensaje + '. ';
                        });
                    }
                })
                .catch((error) => {
                    textoMensaje = error;
                });
        } catch (error) {
            textoMensaje = error;
            console.log(error);
        }
        Alert.alert("Inicio de sesión", textoMensaje);
        dispath({
            datos: {
                usuario: usuario,
                token: token,
                usuarioFinal: false,
            },
            acciones: 'SET_LOGIN',
        });
    }

    const setLoginUsuario = async (data) => {
        try {
            console.log(data);
            var textoMensaje = "";
            var usuario = null;
            var token = null;
            await Axios.post('/login/iniciosesion', {
                usuario: data.usuario,
                contrasena: data.contrasena
            })
                .then(async(data) => {
                    const json = data.data;
                    console.log(json);
                    if (json.errores.length == 0) {
                        usuario = json.data.usuario;
                        token = json.data.token;
                        console.log(token);
                        await AsyncStorage.setItem('toke_almacenado', String(token));
                        const u = JSON.stringify(usuario);
                        await AsyncStorage.setItem('usuario_almacenado', u);
                        textoMensaje = 'Bienvenido ' + usuario.nombre;
                    }
                    else {
                        textoMensaje = '';
                        json.errores.forEach(element => {
                            textoMensaje += element.mensaje + '. ';
                        });
                    }
                })
                .catch((error) => {
                    textoMensaje = error;
                });
        } catch (error) {
            textoMensaje = error;
            console.log(error);
        }
        Alert.alert("Inicio de sesión", textoMensaje);
        dispath({
            datos: {
                usuario: usuario,
                token: token,
                usuarioFinal:true
            },
            acciones: 'SET_LOGIN',
        });
    }
    return (
        <UsuarioContext.Provider value={{
            usuario: estado.usuario,
            token: estado.token,
            msj: estado.msj,
            inicio: estado.inicio,
            sesionIniciada: estado.sesionIniciada,
            tokenValidado: estado.tokenValidado,
            aplicacionIniciada: estado.aplicacionIniciada,
            usuarioFinal:estado.usuarioFinal,
            setLogin,
            setLoginUsuario,
            setDatos,
            setCerrarSesion,
        }}>
            {props.children}
        </UsuarioContext.Provider>
    )
}
export default UsuarioState;
