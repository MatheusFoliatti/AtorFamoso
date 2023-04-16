import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Topo from './components/Topo/index'
import Content from './components/Content/index'
import About from './components/About/index'

export default function App() {
  return (
    <View style={stylesGlobal.containerGlobal}>
      <Topo />
      <Content />
      <About />
    </View>
  );
}

const stylesGlobal = StyleSheet.create({
  containerGlobal: {
      width:'100%',
      height:'100%',  
      alignItems:'center',
      backgroundColor:'#0b1c34',
      display:'flex',
      flexDirection:'column'
  }
})
