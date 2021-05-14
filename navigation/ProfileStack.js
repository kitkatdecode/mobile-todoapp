import { createStackNavigator } from 'react-navigation-stack';
import Profile from '../components/Profile';
import React from 'react';
import Header from '../shared/Header';

const screens = {
    Profile:{
        screen: Profile,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Profile' />
            }
        }
    },
};

const profileStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle: {backgroundColor: 'mistyrose'},
        headerTintColor: 'black',
    }
});

export default profileStack;