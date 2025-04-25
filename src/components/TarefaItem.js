import { View, Text, StyleSheet} from 'react-native';

export default function TarefaItem(props) {
    let statusColor = 'orange';

    if (props.status == 'concluido'){
        statusColor = 'green';
    }
    return (
        <View style={styles.container}>
           <Text style={styles.titulo}>{props.nome}</Text>
           <Text style={styles.data}>{props.data}</Text>
           <Text style={styles.categoria}>Categoria - {props.categoria}</Text>
           <View style={{...styles.status, backgroundColor: statusColor}}>
            <Text style={styles.textoStatus}>{props.status}</Text>
           </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height: 100,
        padding: 15,
        borderBottomWidth: 1,
    },
    titulo:{
        fontWeight: 'bold',
        fontSize:18
    },
    data:{
        marginTop: 5,
        marginLeft: 3.5
    },
    categoria:{
        marginTop: 8
    },
    status:{
        backgroundColor: 'orange',
        width: 150,
        height: 30,
        borderRadius:30,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 150
    },
    textoStatus: {
        color: 'white'
    }

});
