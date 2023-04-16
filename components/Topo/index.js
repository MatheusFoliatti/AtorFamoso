import React from "react";
import { View, Text, Image } from "react-native"

import stylesTopo from "./styles";

export default function Topo() {
    return(
        <View style={stylesTopo.containerTopo }> 
            <Text style={ stylesTopo.title }> ATOR FAMOSO </Text>
        </View>
    )
}