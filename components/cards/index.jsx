    import { View, TouchableOpacity, Text, Image } from "react-native"
    import { estile } from "./style.jsx"   
    export default function Card({name}){
        return(
            <View style={estile.container}>
                <TouchableOpacity style={estile.botao}>
                <Image
                    style={estile.imagem}
                    source={require('../../assets/usuario.png')}
                />
                </TouchableOpacity>
                <Text style={estile.texto}>
                    {name}
                </Text>
            </View>
        )
    }