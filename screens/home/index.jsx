    import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from "react-native";
    import { estilo } from "./styles.jsx";
    import Card from "../../components/cards/index.jsx";

    export default function Home(){

        const lista = ['teste', 'bruno', 'andre', 'maria']

        return(
            <View style={estilo.tela}>
               <Image
                    source={require('../../assets/imagemcima.jpg')}
                    style={estilo.imagemcima}
                />
                <View style={estilo.form}>
                    <TextInput style={estilo.input_text}/>
                    <TouchableOpacity style={estilo.botao}>
                        <Image
                            style={estilo.imagem}
                            source={require('../../assets/lupabotao.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={estilo.lista}>
                    <FlatList 
                        data={lista}
                        keyExtravtor={item => item}
                        renderItem={({item}) =>(
                        <Card key={item} name={item}/>
                        )}
                    />
                </View>
            </View>
            
        )
    }