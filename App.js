import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, Pressable, Alert, ActivityIndicator } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.textcontainer}>
        <Text style={styles.text}>Lorem 20</Text>
        <Text style={styles.text}>Lorem 20</Text>
        <Text style={styles.text}>Lorem 20</Text>
        <Image source={{uri:'https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png'}} style={{ width: 200, height: 100 }} />
        <Image source={require('./assets/logo.png')} style={{ width: 200, height: 100 }} />
        <Pressable onPress={() => {Alert.alert('title', 'Hello Alert')}} style={({ pressed }) => [{
            backgroundColor: pressed
              ? 'red'
              : 'white'
          }]}>
          <Text>ALERT</Text>
        </Pressable>
        <ActivityIndicator size="large" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    paddingBottom:100,
  },
  textcontainer: {
    justifyContent: 'center',
    backgroundColor: 'white',
    color: 'red',
    alignItems: 'center',
  },
  text: {
    marginTop: 80,
    marginBottom: 80,
    fontSize: 30,
    fontWeight: 'bold',
  }
});

