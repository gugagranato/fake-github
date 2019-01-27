import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Welcome from 'pages/welcome';
import Organizations from 'pages/organizations';
import Repositories from 'pages/repositories';

const createRootNavigator = (userExist = false) => createStackNavigator({
  Welcome: {
    screen: Welcome,
  },
  User: {
    screen: createBottomTabNavigator({
      Repositories: { screen: Repositories },
      Organizations: { screen: Organizations },
    }),
  },
}, { initialRouteName: userExist ? 'User' : 'Welcome' });

const App = createAppContainer(createRootNavigator);

export default App;
