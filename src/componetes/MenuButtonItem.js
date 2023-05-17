import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'


const MenuButtonItem = ({ text, onPress}) =>{
    return(

        <TouchableOpacity
        style = {styles.buttonContainer}
            onPress={onPress}
        >
            <Text style = {styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    buttonContainer:{
        backgroundColor: '#6c6dfa',
        borderRadius: 10,
        flexDirection: 'row',
        marginBottom: 15,
        padding: 15,
        color: '#fff',
        activetintColor: 'red',
    },
    changeColor:()=>{
        this.setState({
        backgroundColor:'red',
        backgroundColor2:'black'
        })
    },
    changeColor2:()=>{
        this.setState({
            backgroundColor:'black',
            backgroundColor2:'red'
        })
    },
    text:{
        color: '#fff',
        fontWeight: 'bold',
    }  
})
export default MenuButtonItem;