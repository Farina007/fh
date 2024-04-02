  import { StyleSheet } from "react-native";

  export const estilo = StyleSheet.create({
    tela: {
      flex: 1,
      backgroundColor: '#004777',
    },
    form: {
      flexDirection: 'row',
      width: '100%',
      marginTop: 16,
      marginBottom: 30,
      paddingLeft: 20,
      paddingRight: 20
    },
    input_text: {
      flex: 1,
      height: 80,
      color: '#FFF',
      fontSize: 22,
      padding: 12,
      borderRadius: 10,
      backgroundColor: '#424242',
      marginRight: 5,
    },
    botao: {
      width: 56,
      borderRadius: 10,
      fontSize: 50,
      backgroundColor: '#00023D',
      alignItems: 'center',
      justifyContent: 'center'
    },
    text: {
      color: '#fff',
      fontSize: 25,
    },
    imagem: {
      width: 50,
      height: 50
    },
    imagemcima: {
      height: 100,
      width : '100%',
    },
    lista:{
      paddingLeft: 20,
      paddingRight: 20
    }
  })