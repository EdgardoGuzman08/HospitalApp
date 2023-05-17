import {  Text, View, Button, ImageBackground, ScrollView, TextInput, Alert, Pressable, FlatList } from 'react-native';
import React, { useState, useEffect, useContext } from 'react';
import Especialidades from '../componetes/Especialidades';
import { Ionicons } from '@expo/vector-icons';
import Estilos from '../componetes/Estilos';
import pasillo from '../../assets/pasillo.jpg';
import Axios from '../componetes/Axios';
import fondobonito from '../../assets/fondooscuro.jpeg'
import Cargando from '../componetes/Cargando';

    const ListarEspecialidad = ({ navigation }) => {
        const [Filtro, setFiltro] = useState(null);
        const [lista, setLista] = useState([]);
        const [validarFiltro, setValidarFiltro] = useState(false);
        const [espera, setEspera] = useState(false);
        const titulo = 'Lista de Especialidad';
        useEffect(()=>{
            BuscarTipoTodos();
        },[]);
        useEffect(() => {
            if (!Filtro) {
                setValidarFiltro(true);
            }
            else if (Filtro.length < 3) {
                setValidarFiltro(true);
            }
            else {
                setValidarFiltro(false);
            }
        }, [Filtro]);
        useEffect(()=>{
            if(!validarFiltro){
                BuscarTipo();
            }
        },[validarFiltro]);
        const BuscarTipo = async () => {
            if (!validarFiltro) {
                var textoMensaje = '';
                setEspera(true);
                await Axios.get('/especialidades/buscarnombre?nombre=' + Filtro + '%')
                    .then(async (data) => {
                        const json = data.data;
                        if (json.errores.length == 0) {
                            textoMensaje = "Datos cargados";
                            console.log(json.data);
                            setLista(json.data);
                        }
                        else {
                            textoMensaje = '';
                            json.errores.forEach(element => {
                                textoMensaje += element.mensaje + '. ';
                            });
                        }
                    })
                    .catch((er) => {
                        console.log(er);
                    });
                setEspera(false);
            }
            else {
                Alert.alert(titulo, 'Debe enviar los datos correctos');
            }
        };
        const BuscarTipoTodos = async () => {
            var textoMensaje='';
            setEspera(true);
            await Axios.get('/especialidades/listar')
                .then(async (data) => {
                    const json = data.data;
                    if (json.errores.length == 0) {
                        setLista(json.data);
                    }
                    else {
                        textoMensaje = '';
                        json.errores.forEach(element => {
                            textoMensaje += element.mensaje + '. ';
                        });
                    }
                })
                .catch((er) => {
                    console.log(er);
                });
            setEspera(false);
            if(textoMensaje!=''){
                Alert.alert(titulo, textoMensaje);
            }
        }; 
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
                    {
                        espera ? (
                            <Cargando texto="Estableciendo conexion con la API"></Cargando>
                        ) : (
                            <>
                                <View style={Estilos.contenedorControles}>
                                    <TextInput style={validarFiltro ? Estilos.entradaError : Estilos.entradabusqueda}
                                        placeholder='Escriba el nombre de la especialidad'
                                        placeholderTextColor={'green'}
                                        value={Filtro}
                                        onChangeText={setFiltro}
                                    >
                                    </TextInput>
                                    { 
                                        validarFiltro ? (
                                            <>
                                                <Text style={Estilos.etiquetaError}>Dede escribir el nombre de la especialidad</Text>
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
                                            title='Ver Todos'
                                            color={'#000'}
                                            onPress={BuscarTipoTodos}
                                        ></Button>
                                    </View>
                                </View>
                                <View style={Estilos.contenedorControles}>
                                    <FlatList
                                        data={lista}
                                        renderItem={({ item }) => <Especialidades especialidad={item}></Especialidades>}
                                        keyExtractor={item => item.id}
                                    />
                                </View>
                            </>
                        )
                    }
                </ImageBackground>
                </View>
            </View>
            
        );
    }
    export default ListarEspecialidad;