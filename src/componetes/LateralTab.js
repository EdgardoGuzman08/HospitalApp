import Principal from '../pantallas/Principal';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MenuTab from './MenuTab';

const Drawer = createDrawerNavigator();

const Lateral = ()=>{
    return (
        <Drawer.Navigator
            defaultStatus="open"
            screenOptions={{
                overlayColor: 'transparent',
            }}
        >
            <>            
                <Drawer.Screen name="Menu Principal" component={MenuTab} />
                <Drawer.Screen name="Pantalla Principal" component={Principal} />
            </>
        </Drawer.Navigator>
    );
};

export default Lateral;