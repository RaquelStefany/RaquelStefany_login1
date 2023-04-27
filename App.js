import React, { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import arrowLeft from './assets/arrowLeft.png';
import Checkbox from 'expo-checkbox';

export default function App() {
  const [isChecked1, setChecked1] = useState(false);
  const [isChecked2, setChecked2] = useState(false);
  const [isChecked3, setChecked3] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.arrowBack} source={arrowLeft} />
        <Text style={styles.top}>
          Reportar
        </Text>
      </View>
      <View style={styles.main}>
        <View style={styles.check}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked1}
            onValueChange={setChecked1}
            color={isChecked1 ? '#07689F' : undefined}
          />
          <Text style={styles.label}>
            O profissional não compareceu.
          </Text>
        </View>
        <View style={styles.check}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked2}
            onValueChange={setChecked2}
            color={isChecked2 ? '#07689F' : undefined}
          />
          <Text style={styles.label}>
            O profissional não prestou um bom serviço.
          </Text>
        </View>
        <View style={styles.check}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked3}
            onValueChange={setChecked3}
            color={isChecked3 ? '#07689F' : undefined}
          />
          <Text style={styles.label}>
            Outro.
          </Text>
        </View>
        <TextInput
          style={styles.titulo}
          placeholder="Título"
        />
        <TextInput
          style={styles.descricao}
          placeholder="Especifique aqui o que houve."
          numberOfLines={10}
          multiline
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.texto}>
            Reportar
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  header: {
    padding: '5%',
    paddingTop: '12%',
    backgroundColor: '#3E978B',
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  top: {
    fontSize: 20,
    fontWeight: 600,
    color: '#FFF',
    width: '80%',
    textAlign: 'center',
  },
  arrowBack: {
    width: 40,
    height: 40,
  },
  main: {
    margin: 50,
  },
  check: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    marginRight: 10,
    borderColor: '#6D7A78',
  },
  label: {
    fontSize: 18,
    fontWeight: 500,
  },
  titulo: {
    borderColor: '#6D7A78',
    borderWidth: 1,
    borderRadius: 3,
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 30,
  },
  descricao: {
    borderColor: '#6D7A78',
    borderWidth: 1,
    borderRadius: 3,
    fontSize: 14,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#07689F',
    padding: 12,
    borderRadius: 2,
  },
  texto: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 500,
    textAlign: 'center',
  }
});
