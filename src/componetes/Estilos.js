import { StyleSheet, Text, View, Button } from 'react-native';


const Estilos = StyleSheet.create({
    contenedorPrincipal: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        //padding: 30,
    },
    contenedorTitulo: {
        backgroundColor: '#000',
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        width: '100%',
        height: 260,              
    },
    contenedorContenido: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#25d366',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 0,
    },
    contenedorContenidoPantalla: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#25d366',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 0,
    },
    contenedorControlesPantalla:{
        flexDirection: 'column',
        paddingTop: 20
    },
    contenedorContenidoL: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#25d366',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        width: '100%',
        padding: 0,
    },
    textoTitulo: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '900',
        textAlign: "center",
        marginBottom: 20
    },
    textoTitulo1: {
        color: '#fff',
        fontSize: 30,
        fontWeight: '900',
        textAlign: "center",
    },
    textotitulocontenedor:{
        width:"100%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:40,
    },
    imagenFondo:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20,
    },
    imagenFondoLogin:{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        padding: 20,
        marginTop: 55,
        width: 360,
        height: 195,
        marginLeft: 20
    },
    contenedorControles:{
        flexDirection: 'column',
        marginTop: 10,          //margen arriba
        marginBottom: 20,       //margen abajo
    },
    contenedorBotones:{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
        marginBottom: 15,

    },
    contenedorBotonesLogin:{
        flexDirection: 'column',
        justifyContent: 'space-evenly', //Distribución equitativa
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 70
    },
    contenedorBotonesA:{
        flexDirection: 'row',
        justifyContent: 'space-evenly', //Distribución equitativa
        marginTop: 10,
        marginBottom: 45,
    },
    entrada:{
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        fontSize: 16,
    },
    entradabusqueda:{
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        fontSize: 16,
        color: '#fff'
    },
    entradaPantalla:{
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        fontSize: 16,
        color: '#fff'

    },
    contenedorControlesPantalla1:{
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20,
        justifyContent: 'space-evenly',
    },
    entradaPantalla1:{
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 16,
        color: '#fff',
        marginLeft: 20,
        marginRight: 20,
        
    },
    entradaError:{
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        fontSize: 16,
    },
    entradaLogin:{
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        fontSize: 20,
        backgroundColor:"#465881",
        color: "#fff",
    },
    entradaErrorlogin:{
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 10,
        padding: 5,
        fontSize: 20,
        backgroundColor:"#465881",
        color: "#fff",
    },
    etiquetasLogin:{
        fontSize: 20,
        marginBottom: 5,    //margen
        color: '#000'
    },
    etiquetas:{
        
        fontSize: 20,
        marginBottom: 5,    //margen
        
    },
    etiquetasPantalla:{
        
        fontSize: 20,
        marginBottom: 5,    //margen
        color: 'yellow',
        
    },
    etiquetaError:{
        fontSize: 12,
        marginBottom: 5,
        marginLeft: 5,
        color: "red",
    },
    boton:{
        flex: 1,
        alignItems: 'stretch',
        marginLeft: 10,
        marginRight: 10,       
    },
    fondoPantalla:{
        flex: 1,
    },
    loginBtn:{
        width:"80%",
        backgroundColor:"#fb5b5a",
        borderRadius:25,
        height:50,
        alignItems:"center",
        justifyContent:"center",
        marginTop:20,
        marginBottom:10,
    },
    loginText:{
        color:"white",
        fontSize: 18
    },
    inputView:{
        width:"80%",
        backgroundColor:"#465881",
        borderRadius:25,
        height:50,
        marginBottom:20,
        justifyContent:"center",
        padding:20
    }, botonInicio:{
        flex: 1,
        marginLeft: 270,
        paddingBottom: 80,
        alignItems:'center'
    },
    botonInicio1:{
        flex: 1,
        paddingBottom: 80,
        alignItems:'center'
    },
    contenedorControlesL:{
        flexDirection: 'row',
        marginTop: 20,          //margen arriba
        marginBottom: 20,       //margen abajo
    },
    searchIcon: {
        padding: 10,        
    },
    input: {
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 16,
    },
    parrafos:{
        marginTop: 30,
        textAlign: 'justify',
        backgroundColor: '#fff',
        fontWeight: '900',
        fontSize: 16,
        padding: 20,
        marginLeft: 10,
        marginRight: 10
    },
    espiFondo:{
        height: 170,
        width: 185,
        marginLeft: 20,
        marginRight: 20,
    },
    contenedorFotos:{
        flexDirection: 'row',
        paddingTop: 20,
        justifyContent: 'space-evenly',
        
    },
    subTitulo: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '900',
        textAlign: "center",
        marginTop: 40,          //margen arriba
    },
    nombreimagen: {
        color: '#000',
        fontSize: 20,
        fontWeight: '900',
        textAlign: "center",
        paddingTop: 140
    },
    contenedorBotonesP:{
        flexDirection: 'row',
        justifyContent: 'space-evenly', //Distribución equitativa
        marginTop: 10,
        marginBottom: 10,
    },
    boton2:{
        flex: 1,
        alignItems: 'stretch',
        marginLeft: 10,
        marginRight: 10,
    },
});
export default Estilos;
