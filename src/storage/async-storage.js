import AsyncStorage from '@react-native-async-storage/async-storage';

const Key = 'tasks';

const getData = async () =>{
   return await AsyncStorage.getItem(Key);
}

const setData = async ( value) =>{
    await AsyncStorage.getItem(Key, JSON.stringify(value));

}

export{
    getData,
    setData
}