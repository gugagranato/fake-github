import 'config/ReactotronConfig';

import React, { Component } from 'react';
import AsyncStorage from 'react-native';
import createRootNavigator from 'routes';

export default class App extends Component {
  state = {
    userExist: false,
    userChecked: false,
  }

  componentWillMount() {
    // Checar se exite usuário
    this.checkUser()
      .then((response) => {
        this.setState({ userExist: response, userChecked: true });
      })
      .catch((err) => {
        console.log('err', err);
      });
    //
  }

  checkUser = async () => {
    const user = await AsyncStorage.getItem('@Githuber:username');

    return user !== null;
  }

  render() {
    const { userChecked, userExist } = this.state;

    if (!userChecked) return null;

    const Layout = createRootNavigator(userExist);

    return <Layout />;
  }
}
