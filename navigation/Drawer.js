import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import navStack from './NavStack';
import profileStack from './ProfileStack';

const RootDrawerNav = createDrawerNavigator(
    {
        Home: {
            screen:navStack,
        },
        Profile: {
            screen: profileStack,
        },
    },
    {
        // drawerBackgroundColor: 'rgba(255,255,255,.9)',
        contentOptions: {
          activeTintColor: '#fff',
          activeBackgroundColor: 'green',
          itemStyle: {paddingTop:20}
        },
    }

);

export default createAppContainer(RootDrawerNav);
