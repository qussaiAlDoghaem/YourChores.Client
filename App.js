import React ,{useState} from 'react';
import { StatusBar  } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [weather,setWeather] = useState("Lodding .....");

  
    const getWeather = async ()=>{
      
      var res = await fetch('http://192.168.20.10:5001/WeatherForecast') ;
      var data = await res.json();
  
      setWeather(data[0].summary);
  }
  getWeather();
  return (
   
    <View style={styles.container}>
      <Text>{weather}</Text>
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
});
