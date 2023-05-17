import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
    createDrawerNavigator, 
    DrawerContentScrollView, 
    DrawerItemList, 
    DrawerItem 
} from '@react-navigation/drawer';
import MenuButtonItem from './MenuButtonItem';
import Login from '../pantallas/Login';
import MenuTab from './MenuTab';
import UsuarioContext from '../contexto/UsuarioContext';
import ListarMedicos from '../pantallas/ListarMedicos';
import GuardarMedicos from '../pantallas/GuardarMedico';
import EditarMedicos from '../pantallas/EditarMedicos';
import EliminarMedicos from '../pantallas/EliminarMedicos';
import ListarPacientes from '../pantallas/ListarPacientes';
import GuardarPacientes from '../pantallas/GuardarPacientes';
import EditarPacientes from '../pantallas/EditarPacientes';
import EliminarPacientes from '../pantallas/EliminarPacientes';
import ListarEspecialidad from '../pantallas/ListarEspecialidad';
import GuardarEspecialidad from '../pantallas/GuardarEspecialidad';
import EditarEspecialidades from '../pantallas/EditarEspecialidad';
import EliminarEspecialidad from '../pantallas/EliminarEspecialidad';
import ListarHorario from '../pantallas/ListarHorario';
import GuardarHorario from '../pantallas/GuardarHorario';
import EditarHorarios from '../pantallas/EditarHorario';
import EliminarHorario from '../pantallas/EliminarHorario';
import ListarReceta from '../pantallas/ListarRecetas';
import GuardarReceta from '../pantallas/GuardarRecetas';
import EditarRecetas from '../pantallas/EditarRecetas';
import EliminarReceta from '../pantallas/EliminarRecetas';
import ListarCitas from '../pantallas/ListarCitas';
import GuardarCitas from '../pantallas/GuardarCitas';
import EditarCitas from '../pantallas/EditarCitas';
import EliminarCitas from '../pantallas/EliminarCitas';
import ListarExpedientes from '../pantallas/ListarExpediente';
import GuardarExpedientes from '../pantallas/GuardarExpediente';
import EditarExpedientes from '../pantallas/EditarExpediente';
import EliminarExpedientes from '../pantallas/EliminarExpediente';
import ListarSalas from '../pantallas/ListarSalas';
import GuardarSalas from '../pantallas/GuardarSalas';
import EditarSalas from '../pantallas/EditarSalas';
import EliminarSalas from '../pantallas/EliminarSalas';
import Cargando from './Cargando';
import { View, Text, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const Pantallas = () => {

    const { aplicacionIniciada, setDatos, sesionIniciada, usuarioFinal } = React.useContext(UsuarioContext);
    setDatos();
    if (aplicacionIniciada) {

        return (
            <Drawer.Navigator
            defaultStatus= "closed"
            drawerContent={ (props) => <MenuItems {...props} /> }
            
                screenOptions={{
                    headerShown: false,
                    overlayColor: "transparent",
                    
                    drawerStyle:{
                        backgroundColor: '#c6cbef',
                        width: '58%'
                    },
                    drawerActiveTintColor: "blue",
                    drawerInactiveTintColor: "white"
                }}
                
            >
                {(sesionIniciada && usuarioFinal===false )? (

                    <>
                        <Drawer.Screen name="Menu" component={MenuTab} />
                        <Drawer.Screen name="Listar Medicos" component={ListarMedicos}/>
                        <Drawer.Screen name="Guardar Medicos" component={GuardarMedicos}/>
                        <Drawer.Screen name="Editar Medicos" component={EditarMedicos}/>
                        <Drawer.Screen name="Eliminar Medicos" component={EliminarMedicos}/>
                        <Drawer.Screen name="Listar Pacientes" component={ListarPacientes}/>
                        <Drawer.Screen name="Guardar Pacientes" component={GuardarPacientes}/>
                        <Drawer.Screen name="Editar Pacientes" component={EditarPacientes}/>
                        <Drawer.Screen name="Eliminar Pacientes" component={EliminarPacientes}/>
                        <Drawer.Screen name="Listar Especialidades" component={ListarEspecialidad}/>
                        <Drawer.Screen name="Guardar Especialidades" component={GuardarEspecialidad}/>
                        <Drawer.Screen name="Editar Especialidades" component={EditarEspecialidades}/>
                        <Drawer.Screen name="Eliminar Especialidades" component={EliminarEspecialidad}/>
                        <Drawer.Screen name="Listar Horarios" component={ListarHorario}/>
                        <Drawer.Screen name="Guardar Horarios" component={GuardarHorario}/>
                        <Drawer.Screen name="Editar Horarios" component={EditarHorarios}/>
                        <Drawer.Screen name="Eliminar Horarios" component={EliminarHorario}/>
                        <Drawer.Screen name="Listar Recetas" component={ListarReceta}/>
                        <Drawer.Screen name="Guardar Recetas" component={GuardarReceta}/>
                        <Drawer.Screen name="Editar Recetas" component={EditarRecetas}/>
                        <Drawer.Screen name="Eliminar Recetas" component={EliminarReceta}/>
                        <Drawer.Screen name="Listar Citas" component={ListarCitas}/>
                        <Drawer.Screen name="Guardar Citas" component={GuardarCitas}/>
                        <Drawer.Screen name="Editar Citas" component={EditarCitas}/>
                        <Drawer.Screen name="Eliminar Citas" component={EliminarCitas}/>
                        <Drawer.Screen name="Listar Expediente" component={ListarExpedientes}/>
                        <Drawer.Screen name="Guardar Expediente" component={GuardarExpedientes}/>
                        <Drawer.Screen name="Editar Expediente" component={EditarExpedientes}/>
                        <Drawer.Screen name="Eliminar Expediente" component={EliminarExpedientes}/>
                        <Drawer.Screen name="Listar Salas" component={ListarSalas}/>
                        <Drawer.Screen name="Guardar Salas" component={GuardarSalas}/>
                        <Drawer.Screen name="Editar Salas" component={EditarSalas}/>
                        <Drawer.Screen name="Eliminar Salas" component={EliminarSalas}/> 
                    </>
                ):(sesionIniciada && usuarioFinal===true)? (
                    <>
                            <Drawer.Screen name="Menu" component={MenuTab} />
                            <Drawer.Screen name="Listar Medicos" component={ListarMedicos}/>
                            <Drawer.Screen name="Listar Especialidades" component={ListarEspecialidad}/>
                            <Drawer.Screen name="Listar Recetas" component={ListarReceta}/>
                            <Drawer.Screen name="Listar Horarios" component={ListarHorario}/>
                            <Drawer.Screen name="Listar Expediente" component={ListarExpedientes}/>
                            <Drawer.Screen name="Listar Salas" component={ListarSalas}/>
                            <Drawer.Screen name="Listar Citas" component={ListarCitas}/>
                            <Drawer.Screen name="Guardar Citas" component={GuardarCitas}/>
                            <Drawer.Screen name="Editar Citas" component={EditarCitas}/>
                            <Drawer.Screen name="Eliminar Citas" component={EliminarCitas}/>
                    </>
                ): <>
                    <Stack.Screen name="Login" component={Login} />
                    </>
                }
            </Drawer.Navigator>
        );
    }
    else {
        return <Cargando texto="Cargando aplicación"/>;
    }

}
export default Pantallas;

const MenuItems = ({navigation}) =>{
    const { usuarioFinal } = React.useContext(UsuarioContext);

    return(
        <DrawerContentScrollView
            style={styles.container}
        >
            <Text style={styles.title}>Menu</Text>
            <MenuButtonItem 
                text = "pantalla principal"
                onPress = { () => navigation.navigate('Menu')}
            />

            <Text style={styles.title}>Medicos</Text>
            
            <MenuButtonItem
                text = "Listar Medico"
                onPress = { () => navigation.navigate('Listar Medicos')}
            />
            { usuarioFinal || <MenuButtonItem
                text = "Guardar Medico"
                onPress = { () => navigation.navigate('Guardar Medicos')}
            />}
            
            { usuarioFinal ||
            <MenuButtonItem
                text = "Editar Medico"
                onPress = { () => navigation.navigate('Editar Medicos')}
            />}

            { usuarioFinal ||
            <MenuButtonItem
                text = "Eliminar Medico"
                onPress = { () => navigation.navigate('Eliminar Medicos')}
            />}
            { usuarioFinal ||
            <Text style={styles.title}>Pacientes</Text>}
            
            { usuarioFinal ||
            <MenuButtonItem
                text = "Listar Pacientes"
                onPress = { () => navigation.navigate('Listar Pacientes')}
            />}

            { usuarioFinal ||
            <MenuButtonItem
                text = "Guardar Pacientes"
                onPress = { () => navigation.navigate('Guardar Pacientes')}
            />}
            
            { usuarioFinal ||
            <MenuButtonItem
                text = "Editar Pacientes"
                onPress = { () => navigation.navigate('Editar Pacientes')}
            />}

            { usuarioFinal ||
            <MenuButtonItem
                text = "Eliminar Pacientes"
                onPress = { () => navigation.navigate('Eliminar Pacientes')}
            />}

            <Text style={styles.title}>Especialidades</Text>
            <MenuButtonItem
                text = "Listar Especialidades"
                onPress = { () => navigation.navigate('Listar Especialidades')}
            />

            { usuarioFinal ||
            <MenuButtonItem
                text = "Guardar Especialidades"
                onPress = { () => navigation.navigate('Guardar Especialidades')}
            />}

            { usuarioFinal ||
            <MenuButtonItem
                text = "Editar Especialidades"
                onPress = { () => navigation.navigate('Editar Especialidades')}
            />}

            { usuarioFinal ||
            <MenuButtonItem
                text = "Eliminar Especialidades"
                onPress = { () => navigation.navigate('Eliminar Especialidades')}
            />}

            <Text style={styles.title}>Horarios</Text>
            <MenuButtonItem
                text = "Listar Horarios"
                onPress = { () => navigation.navigate('Listar Horarios')}
            />

            { usuarioFinal ||
            <MenuButtonItem
                text = "Guardar Horarios"
                onPress = { () => navigation.navigate('Guardar Horarios')}
            />}

            { usuarioFinal ||
            <MenuButtonItem
                text = "Editar Horarios"
                onPress = { () => navigation.navigate('Editar Horarios')}
            />}
            { usuarioFinal ||
            <MenuButtonItem
                text = "Eliminar Horarios"
                onPress = { () => navigation.navigate('Eliminar Horarios')}
            />}

            <Text style={styles.title}>Recetas</Text>
            <MenuButtonItem
                text = "Listar Recetas"
                onPress = { () => navigation.navigate('Listar Recetas')}
            />
            { usuarioFinal ||
            <MenuButtonItem
                text = "Guardar Recetas"
                onPress = { () => navigation.navigate('Guardar Recetas')}
            />}
            { usuarioFinal ||
            <MenuButtonItem
                text = "Editar Recetas"
                onPress = { () => navigation.navigate('Editar Recetas')}
            />}
            { usuarioFinal ||
            <MenuButtonItem
                text = "Eliminar Recetas"
                onPress = { () => navigation.navigate('Eliminar Recetas')}
            />}

            <Text style={styles.title}>Citas</Text>
            <MenuButtonItem
                text = "Listar Citas"
                onPress = { () => navigation.navigate('Listar Citas')}
            />
            
            <MenuButtonItem
                text = "Guardar Citas"
                onPress = { () => navigation.navigate('Guardar Citas')}
            />
        
            <MenuButtonItem
                text = "Editar Citas"
                onPress = { () => navigation.navigate('Editar Citas')}
            />
            
            <MenuButtonItem
                text = "Eliminar Citas"
                onPress = { () => navigation.navigate('Eliminar Citas')}
            />

            <Text style={styles.title}>Expedientes</Text>
            <MenuButtonItem
                text = "Listar Expedientes"
                onPress = { () => navigation.navigate('Listar Expediente')}
            />
            { usuarioFinal ||
            <MenuButtonItem
                text = "Guardar Expedientes"
                onPress = { () => navigation.navigate('Guardar Expediente')}
            />}
            { usuarioFinal ||
            <MenuButtonItem
                text = "Editar Expedientes"
                onPress = { () => navigation.navigate('Editar Expediente')}
            />}
            { usuarioFinal ||
            <MenuButtonItem
                text = "Eliminar Expedientes"
                onPress = { () => navigation.navigate('Eliminar Expediente')}
            />}

            <Text style={styles.title}>Salas</Text>
            <MenuButtonItem
                text = "Listar Salas"
                onPress = { () => navigation.navigate('Listar Salas')}
            />
            { usuarioFinal ||
            <MenuButtonItem
                text = "Guardar Salas"
                onPress = { () => navigation.navigate('Guardar Salas')}
            />}
            { usuarioFinal ||
            <MenuButtonItem
                text = "Editar Salas"
                onPress = { () => navigation.navigate('Editar Salas')}
            />}
            { usuarioFinal ||
            <MenuButtonItem
                text = "Eliminar Salas"
                onPress = { () => navigation.navigate('Eliminar Salas')}
            />}
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding: 15,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        textAlign: 'center',
        
    }
})