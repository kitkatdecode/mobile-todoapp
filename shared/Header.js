import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

export default function Header({ navigation, title }) {

    const showDrawer = () => {
        Keyboard.dismiss()
        navigation.openDrawer();
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.header}>
            <MaterialIcons name='menu' style={styles.icon} size={30} onPress={showDrawer} />
            <View>
                <Text style={styles.title}>{title}</Text>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    header: {
        width:'100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
    },

    title: {
        // flex:5,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        letterSpacing: 1,
        alignContent: 'center',
    },

    icon: {
        // flex:1,
        position: 'absolute',
        left: 2,
        // borderWidth: 1,
    }
})