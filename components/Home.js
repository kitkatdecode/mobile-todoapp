import React, { Component } from 'react';
import {View, StyleSheet, Text, FlatList, Button, Alert, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodoList, addTodo, deleteTodo, deleteTodoList } from '../shared/Reducer';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';

class Home extends Component {
    state = {
        newListName:'',
    }


    handleChange = (text) => {
        this.setState({
            newListName:text
        });
    }

    handleSubmit = () => {
        Keyboard.dismiss()
        if(this.state.newListName.length >0){
            this.props.addTodoList(this.state.newListName);
        }
        this.setState({
            newListName:''
        })
    }

    confirmDelete = (boxId, boxName) => {
        const message = "Are you sure to delete \""+boxName +"\" ?";
        Alert.alert("Confirm Delete", message, [
            {text:"Yes", onPress:() => this.props.deleteTodoList(boxId)},
            {text:"No", onPress:()=>{}},
        ]);
    }
    
    render() {
        return (
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <ImageBackground source={require('../assets/bg3.png')} style={styles.container}>
                <View style={styles.inputBox}> 
                    <TextInput 
                        style={styles.textInput} 
                        keyboardType='default'
                        placeholder="New Plan"
                        onChangeText={(val) => this.handleChange(val)} 
                        value={this.state.newListName}
                    />
                    <View style={styles.button}>
                    <TouchableOpacity onPress={this.handleSubmit} >
                        <MaterialIcons name='add' style={styles.icon} size={28} />
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.list}>
                <FlatList 
                    keyExtractor={(item) => item.id.toString()}
                    data={this.props.todoLists}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('Plan', {id:item.id})}}>
                                <View style={styles.listItem}>
                                    <Text style={styles.text}>{item.name}</Text>
                                    <Button title="Delete" onPress={() => {this.confirmDelete(item.id, item.name)}} color='green' />
                                </View>
                            </TouchableOpacity>
                        );
                    }}
                />
                </View>
            </ImageBackground>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    listItem: {
        flex:1,
        backgroundColor: 'lawngreen',
        fontWeight:'bold',
        alignItems:'center',
        alignContent: 'center',
        borderRadius: 10,
        elevation: 5,
        shadowOffset: {width:1, height:1},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        margin: 10,
        padding:2,
        width:Dimensions.get('window').width-100,
    },
    list: {
        flex:1,
        margin:2,
        borderColor: 'darkturquoise',
        width:Dimensions.get('window').width-30,
        alignItems:'center',
    },
    container:{
        // margin:2,
        flex:1,
        borderColor: 'darkturquoise',
        // width:Dimensions.get('window').width-30,
        alignItems:'center',
    },
    text: {
        padding:24,
        alignItems: 'center',
    },
    inputBox: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        margin:10,
        alignItems: 'center',
        borderColor: 'darkturquoise',
        borderWidth: 1,
        borderStyle: 'dashed',
        width: Dimensions.get('window').width-100,
    },
    textInput: {
        flex:4,
        backgroundColor: 'azure',
        borderBottomColor: 'grey',
        marginLeft: 5,
        padding:5,
    },
    button: {
        flex: 1,
        marginRight: 5,
        alignItems: 'center',
        backgroundColor: 'coral',
    }
});

const mapStateToProps = (state) => {
    return { 
        todoLists: state.todoLists,
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({
      addTodo,
      addTodoList,
      deleteTodo,
      deleteTodoList
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
