import React, { Component } from 'react';
import { StyleSheet, View, TextInput, Button, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

class AddForm extends Component {
    state ={ 
        text: ''
    }

    handleChange = (text) => {
        this.setState({
            text
        });
    }

    handleSubmit = () => {
        if(this.state.text.length > 0){
            this.props.addTodo(this.state.text);
        }

        this.setState({
            text: ''
        });
    }

    render () {
        return (
            <View style={styles.inputBox}>
                <TextInput 
                    style={styles.textInput} 
                    keyboardType='default'
                    placeholder="New Todo"
                    onChangeText={(val) => this.handleChange(val)} 
                    value={this.state.text}
                />
                <View style={styles.button}>
                <TouchableOpacity onPress={this.handleSubmit} >
                    <MaterialIcons name='add' size={28} />
                </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputBox: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        borderColor: 'darkturquoise',
        borderWidth: 1,
        borderStyle: 'dashed',
        padding: 10,
        width: Dimensions.get('window').width-50,
    },
    textInput: {
        flex:4,
        backgroundColor: 'azure',
        borderBottomColor: 'grey',
    },
    button: {
        flex: 1,
        margin: 1,
        backgroundColor: 'green',
        alignItems: 'center',
    }
});

export default AddForm;