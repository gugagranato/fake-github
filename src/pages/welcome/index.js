import React, { Component } from 'react';
import {
  AsyncStorage,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import PropTypes from 'prop-types';

import api from 'services/api';
import styles from './styles';

class Welcome extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  }

  static navigationOptions = {
    header: null,
  }

  state = {
    username: '',
    error: false,
    loading: false,
  };


  checkAndSaveUser = async () => {
    const { username } = this.state;
    const response = await api.get(`/users/${username}`);

    if (!response.ok) throw Error();

    await AsyncStorage.setItem('@fake-github:username', username);
  }

  navigateToUser = () => {
    const { username } = this.state;

    if (username.length === 0) {
      return;
    }

    this.setState({ loading: true, error: false });


    this.checkAndSaveUser()
      .then(() => {
        const { navigation } = this.props;
        const { dispatch } = navigation;

        const resetAction = StackActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'User' }),
          ],
        });

        dispatch(resetAction);
      })

      .catch(() => {
        this.setState({ error: true, loading: false });
      });
  }

  render() {
    const { error } = this.state;
    const { loading } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeTitle}> Bem Vindo </Text>
        <Text style={styles.welcomeDescription}>
          Para continuar, informe o seu usuário no
          <Text style={styles.github}> Github! =)</Text>
        </Text>

        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Digite seu usuário"
          style={styles.input}
          onChangeText={(username) => { this.setState({ username }); }}
        />
        { error && <Text style={styles.error}>Esse usuário não existe</Text>}
        <TouchableOpacity style={styles.button} onPress={this.navigateToUser}>
          { loading
            ? <ActivityIndicator size="small" color="#FFF" />
            : <Text style={styles.buttonText}>Prosseguir</Text>
          }
        </TouchableOpacity>
      </View>

    );
  }
}

export default Welcome;
