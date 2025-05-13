import { View, Text,StyleSheet, Touchable, TouchableOpacity} from 'react-native';
import TarefaItem from '../components/TarefaItem';
import { getData } from '../storage/async-storage';
import { useEffect, useState } from 'react';

export default function Home(){
     
    const [tasks, setTasks] = useState (null)

    //executa ao carregar a página
    useEffect( async () =>{
       const data = await getData();
       setTasks(data);
    }, []);

    console.log(tasks)

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
              <Text style={styles.titulo}>ABRIL / 2025</Text>  
              <View style={styles.icone}></View>
            </View>
            <View style={styles.boby}>
              <TarefaItem 
                 nome="Tarefas 1"
                 status="a cumprir"
                 data="20/04/2024"
                 categoria="Reunião"
              />
             <TarefaItem 
                 nome="Tarefas 2"
                 status="concluido"
                 data="20/04/2022"
                 categoria="Estudo"
              />


            <TouchableOpacity
                style={styles.botaoAdicionar}
                onPress={()=>{
                    alert("wedwe")
                }}
            >
                    <Text style={styles.textoBotaoAdicionar}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cabecalho: {
        backgroundColor: 'blue',
        width:'100%',
        height: 60,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center'
    },
    titulo:{
       color:'white',
       fontSize:18,
       fontWeight: 'bold',
       textAlign:'center'
    },
    icone:{
        backgroundColor:'gray',
        width: 30,
        height: 30,
        borderRadius: 20,
        position:'absolute',
        right: 15
    },
    body:{
        flex: 1
    },
    botaoAdicionar:{
        backgroundColor: 'green',
        width: 30,
        height:30,
        borderRadius:20,
        position: 'absolute',
        right: 15,
        bottom: -500
    },
    textoBotaoAdicionar:{
        fontSize: 20,
        color:'white',
        textAlign: 'center',
        bottom: 2
    }

});
