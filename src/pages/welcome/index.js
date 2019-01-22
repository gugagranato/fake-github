import React, { Component } from 'react';
import {
  Text, View, TextInput, TouchableOpacity,
} from 'react-native';

import styles from './styles';

class Welcome extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeTitle}> Bem Vindo </Text>
        <Text style={styles.welcomeDescription}>
          Para continuar, informe o seu usuário no
          <Text style={styles.github}> Github! =)</Text>
        </Text>

        <TextInput
          placeholder="Digite seu usuário"
          style={styles.input}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Prosseguir</Text>
        </TouchableOpacity>
      </View>

    );
  }
}

export default Welcome;
