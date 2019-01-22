import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Welcome from 'pages/welcome';
import Organizations from 'pages/organizations';
import Repositories from 'pages/repositories';

const Routes = createStackNavigator({
  Welcome: {
    screen: Welcome,
  },
  User: {
    screen: createBottomTabNavigator({
      Repositories: { screen: Repositories },
      Organizations: { screen: Organizations },
    }),
  },
}, { initialRouteName: 'Welcome' });

const App = createAppContainer(Routes);

export default App;
