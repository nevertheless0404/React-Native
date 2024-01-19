
import React, {useEffect, useState} from "react";
import { View, Text ,StyleSheet } from "react-native";


export default function App() {
  const [city, setCity] = useState("Loading...")
  const [location, setLocation] = useState();
  const [ok, setOk] = useState(true);
  const ask = async() => {
    const { granted } = await Location.requesForegroundPermissionsAsync()
    if (!granted) {
      setOk(false);
    }
    const {coords:{latitude, longitude}} =  await Location.getCurrentPositionAsync({accuracy:5})
    const location = await Location.reverseGeocodeAsync({ latitude, longitude }, {useGoogleMaps: false});
    setCity(location[0].city)
  };
  useEffect(() => {
    ask();
  }, [])
  return ( 
    <View style={styles.con}>
      <View style={styles.city}>
        <Text style={styles.cityName}>{city}</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.description}>Sunny</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  con: {
    flex: 1, 
    backgroundColor: "tomato"
  },
  city: {
    flex: 1.2, 
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  weather: {
    flex: 3, 
  },
  day:{
    flex: 1,
    alignItems: "center",
  },
  temp:{
    marginTop: 50,
    fontSize: 178,
  },
  description: {
    marginTop: -30,
    fontSize: 60,
  }
})

//https://snack.expo.dev/@yuyeong/great-orange-apple