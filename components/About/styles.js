import { StyleSheet } from "react-native";

const stylesAbout = StyleSheet.create({
    containerAbout: {
        backgroundColor:'white',
        marginTop:'20px',
        padding:'15px'
    },
    img: {
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'250px',
        height:'250px',
        overflow:'hidden',
    },
    Maintitle: {
        color:'black',
        fontSize:'20px',
        fontWeight:'bold',
        paddingBottom:'15px'
    },
    title:{
        color:'black',
        fontSize:'15px',
        fontWeight:'bold',
        paddingBottom:'5px'
    },
    text:{
        color:'black',
        fontSize:'15px',
        textAlign:'left',
        paddingBottom:'5px'
    }
    
})

export default stylesAbout;