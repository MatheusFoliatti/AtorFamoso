import React from "react";
import { View, Text, Image } from "react-native"

import stylesContent from "./styles";
import SamuelJackson from '../../assets/samueljackson.png'

export default function Content() {
    return(
        <View style={stylesContent.containerContent }> 
            <Image style={ stylesContent.img } source={SamuelJackson}/> 
            <Text style={ stylesContent.title }> Samuel Jackson </Text>
            <Text style={ stylesContent.text }> Ator e produtor norte-americano </Text>
        </View>
    )
}