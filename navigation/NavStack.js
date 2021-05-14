import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Home from '../components/Home';
import TodoList from '../components/TodoList';
import Header from '../shared/Header';

const screens = {
    Default:{
        screen: Home,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation={navigation} title='Home' />
            }
        }
    },

    Plan: {
        screen: TodoList,
        navigationOptions:{
            title:'Plan',
            headerTitleAlign: 'center',
        }
    }
};

const navStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerStyle: {backgroundColor: 'mistyrose'},
        headerTintColor: 'black',
    }
});

export default navStack;