import Principal from '../pantallas/Principal';
import PerfilUsuario from '../pantallas/PerfilUsuario'
import ListaUsuarios from '../pantallas/ListaUsuarios';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from '../pantallas/Login';
const Tab = createBottomTabNavigator();

const MenuTab = ()=>{
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <>
                <Tab.Screen name="Principal" component={Principal} />
                <Tab.Screen name="Perfil" component={PerfilUsuario} />
            </>
        </Tab.Navigator>
    );
};

export default MenuTab;