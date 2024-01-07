import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hdeloooooooooo</Text>
      <StatusBar style="dark" />
      {/* 일부 component는 IOS 및 Android 운영 체제와 소통하기 위함함 */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 28, 
    color: "red",
  }
});

// https://snack.expo.dev/voM-m-WN4
// https://reactnative.dev/docs/button 
