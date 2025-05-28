import AsyncStorage from '@react-native-async-storage/async-storage';

const key = 'tasks';

const getData = async () => {
    // JSON.parse transforma textos em objetos
    let data = JSON.parse(await AsyncStorage.getItem(key));

    // Se não houverem dados, preencher e salvar um array vazio
    if (data == null) {
        data = []
        setData(data)
    }
    return data
}

const setData = async (value) => {
    // JSON.stringify transforma objetos em textos
    await AsyncStorage.setItem(key, JSON.stringify(value));
}

const addData = async (task) =>{
    task.id = new Date().getTime()
    const data = await getData()
    data.push(task)
    await setData(data)
}

const removeData = async (task) =>{
    const tasks = await getData ();

//Para cada item do array "tasks" ele cria uma variável "_task"
for (let _task of tasks){
     //Se o id da "_task" for igual ao id da minha "tasks" (passada no parametro)
    if (_task.id == task.id){
       //Salva o índece da "_task" na constante "index"
       const index = tasks.indexOf(_task)
       //Se a tarefa existir
       if (index !== -1){
           // Remove a tarefa pelo índice encontrado
           tasks.splice(index, 1);
           }
       break
        }
    }
 await setData(tasks)
}
export {
    getData,
    setData,
    addData,
    removeData
}