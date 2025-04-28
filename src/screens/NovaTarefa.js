import { View,Text, StyleSheet}from "react-native";


export default function NovaTarefa(){
    return(
        <View>
            <View style={styles.cabecalho}>
            <Text style={styles.titulo}>Adicionar Tarefa</Text>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    cabecalho: {
        backgroundColor: 'blue',
        width:'100%',
        height: 60,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo:{
        fontWeight: 'bold',
        fontSize:18,
        fontWeight: 'bold',
        textAlign:'center'
    },

})