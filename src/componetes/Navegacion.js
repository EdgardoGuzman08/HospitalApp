import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Pantallas from './Pantallas';

import UsuarioState from '../contexto/UsuarioState';


const Navegacion = () => {
    return (
        <NavigationContainer>
            <UsuarioState>
                <Pantallas>
                </Pantallas>
            </UsuarioState>
        </NavigationContainer>
    );
}
export default Navegacion;
