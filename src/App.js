import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [pokemonEntry, SetPokemonEntry] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.header}>
        Pokemon Journal Thing
      </Text>
      <Text style={styles.text}>
        Type a Pokemon Name:
      </Text>
      <TextInput style={styles.input}></TextInput>

      {/* <Button title="test button"></Button> */}
      <StatusBar style="auto" />
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
  header: {
    color: '#000',
    fontSize: 30,
    margin: 10,
  },
  text: {
    color: '#000',
    fontSize: 12,
  },
  input: {
    borderWidth: 1,
  }
});
