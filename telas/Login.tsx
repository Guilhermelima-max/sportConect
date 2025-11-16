  import { StatusBar } from 'expo-status-bar';
  import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
  import CurvedBackground from '../components/efeito-login';
  import SC from '../assets/login/sc.png'; // caminho do SC logo
  import { Image } from 'react-native'; // biblioteca para importar imagens
import GoogleLogo from '../assets/login/google.png';
import { useNavigation } from '@react-navigation/native';


  export default function App() {
    const navigation = useNavigation();
    const handlePress = () => {
       navigation.navigate('Home');
   
  }; // função criada para o botão.

  const abrirLink = () => {
    console.log('Botão')
  }; // função criada para linkar ao termo de serviço
    return (
      <View style={styles.container}>
      

        <CurvedBackground /> /**chamando o efeito de fundo das cores azul e laranja com o circulo */


        <Image  source={SC} style={styles.imglogo} />
        <Text style={styles.textb} >Bem-vindo</Text>


      <TouchableOpacity style={styles.button} onPress={handlePress}>
      <View style={styles.content}>
        <Image source={GoogleLogo} style={styles.logo} />
        <Text  style={styles.text}>Entrar com o Google</Text>
        
        
      </View>
      
    </TouchableOpacity>
    
    <Text style={styles.textTermo} onPress={abrirLink}>Termo de serviço</Text>
        <StatusBar style="auto" />
      

      </View>
      
    );
  }

  const styles = StyleSheet.create({
    container: {
      
      flex: 1,
      
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

textb:{
 fontSize: 36,
bottom: 210,
fontWeight : 'bold'
 
}, //ESTILO DO NOME BEM VINDO

imglogo: {
 bottom: 260,
 width: 157, 
  height: 163
},// aqui onde faz a estilição da logo SC


button: {
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 60,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 100
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 20,
    height: 20,
    marginRight: 10,
  
  },
  text: {
    fontSize: 20,
    color: '#333333ff',
    fontWeight: '500',
  },
  textTermo: {
    fontSize: 15,
    bottom: 100,
    color: '#0099FF',
    textDecorationLine: 'underline'
  }

  });
