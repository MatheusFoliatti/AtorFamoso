import React from "react";
import { View, Text, Image } from "react-native"

import stylesAbout from "./styles";
import Movie from '../../assets/togetherfordays.png'

export default function About() {
    return(
        <View style={stylesAbout.containerAbout}> 
            <Text style={ stylesAbout.Maintitle }>Sobre o Ator </Text>
            <Text style={ stylesAbout.title }>Sua vida </Text>
            <Text style={ stylesAbout.text }>Nascido em Washington, DC, 21 de dezembro de 1948. Casado com a atriz Latanya Richardson, que conhecera ainda nos tempos de Morehouse College. </Text>
            <Text style={ stylesAbout.title }>Inicio da carreira </Text>
            <Text style={ stylesAbout.text }>Seu primeiro filme se chama Together for Days que estreiou em 1972 </Text>
            <Image style={ stylesAbout.img } source={Movie}/> 
        </View>
    )
}