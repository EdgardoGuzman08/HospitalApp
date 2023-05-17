import { Text, View, Button, ImageBackground, TextInput, Alert, Image, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Estilos from '../componetes/Estilos';
import wallhaven from '../../assets/wallhaven.jpg';
import UsuarioContext from '../contexto/UsuarioContext';
import Cargando from '../componetes/Cargando';

const PerfilUsuario = ({ navigation }) => {
    const { usuario, setCerrarSesion } = useContext(UsuarioContext);
    const [nombre, setnombre] = useState(usuario.nombre);
    const [apellido, setApellido] = useState(usuario.apellido);
    const [validarUsuario, setValidarUsuario] = useState(false);
    const [validarContrasena, setValidarContrasena] = useState(false);
    const [nombreCompleto, setNombreCompleto] = useState(nombre);
    const [espera, setEspera] = useState(false);
    const [modificar, setModificar] = useState(false);
    const cambioSwitch = () => setModificar(previousState => !previousState);
    const titulo = 'Perfil de Usuario';
    useEffect(() => {
        if (!nombre) {
            setValidarUsuario(true);
        }
        else if (nombre.length < 3) {
            setValidarUsuario(true);
        }
        else {
            setValidarUsuario(false);
        }
        if (!apellido) {
            setValidarContrasena(true);
        }
        else if (apellido.length < 6) {
            setValidarContrasena(true);
        }
        else {
            setValidarContrasena(false);
        }
    }, [nombre, apellido]);
    const cerrarSesion = async () => {
        await setCerrarSesion();
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
                        <Cargando texto="Estableciendo conexion con la API"></Cargando>
                    ) : (
                        <>
                            <View style={Estilos.contenedorControles}>
                                <View style={styles.contenedorImagen}>
                                    <Image
                                        style={styles.imagen}
                                        source={wallhaven}
                                    />
                                </View>

                                <TouchableOpacity
                                    style={styles.touch}
                                >
                                    <Text style={Estilos.etiquetaBoton}>Editar imagen</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Estilos.contenedorControles}>
                                <Text style={Estilos.etiqueta}>{"Nombre: " + nombreCompleto}</Text>
                                <Text style={Estilos.etiqueta}>{"Correo: " + usuario.correo}</Text>
                                <Text style={Estilos.etiqueta}>{"Login: " + usuario.login}</Text>
                            </View>

                            <View style={Estilos.contenedorBotones}>
                                <View style={Estilos.boton}>
                                    <Switch
                                        trackColor={{ false: "red", true: "black" }}
                                        thumbColor={modificar ? "black" : "black"}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={cambioSwitch}
                                        value={modificar}
                                    />
                                </View>
                                <Text style={styles.texto}>{modificar ? "Editando" : "Presione para editar"}</Text>
                            </View>
                            <View style={Estilos.contenedorBotones}>
                                <View style={Estilos.boton}>
                                    <Button
                                        title='Guardar Cambios'
                                        color={'#000'}
                                        //onPress={iniciarSesion}
                                    ></Button>
                                </View>
                            </View>
                            <View style={Estilos.contenedorBotones}>
                                <View style={Estilos.boton}>
                                    <Button
                                        title='Cerrar Sesión'
                                        color={'red'}
                                        onPress={cerrarSesion}
                                    ></Button>
                                </View>
                            </View>
                        </>
                    )
                }

            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    sombraControles: {
        shadowColor: "#000",
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    touch: {
        alignItems: "center",
        margin: 10,
        backgroundColor: "#000",
        padding: 10,
        borderRadius: 30,
    },
    entradas: {
        alignItems: "center",
        marginBottom: 20,
        padding: 10,
        fontSize: 20,
        fontWeight: "400",
        color: "#495057",
        backgroundColor: "#fff",
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#ced4da",
        borderRadius: 15,
    },
    imagen: {
        width: 180,
        height: 180,
        resizeMode: "contain",
        borderWidth: 3,
        borderColor: "#dedede",
        borderRadius: 90,
    },
    contenedorImagen: {
        alignItems: 'center'
    },
    texto: {
        color: "black",
        textDecorationColor: "yellow",
        textShadowColor: "red",
        textShadowRadius: 1,
        marginLeft: 10,
        marginRight: 10,
    }
});
export default PerfilUsuario;