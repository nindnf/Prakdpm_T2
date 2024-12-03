import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.text}>Silahkan Pilih Warna Yang Di Inginkan!!!</Text>

      {/* Dua kotak dengan tata letak horizontal */}
      <View style={styles.boxContainer}>
        <View style={[styles.box, styles.boxLeft]} />
        <View style={[styles.box, styles.boxRight]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3', // Abu-abu terang
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20, // Jarak antara teks dan kotak
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  box: {
    width: 100,
    height: 100,
  },
  boxLeft: {
    backgroundColor: '#ADD8E6', // Biru terang
  },
  boxRight: {
    backgroundColor: '#E6E6FA', // Ungu terang
  },
});
