import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import Todo from './Todo';
import AddForm from './AddForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, deleteTodo } from '../shared/Reducer';
import { TouchableWithoutFeedback, Keyboard, ImageBackground } from 'react-native';

class TodoList extends Component {
  state = {
    todoList: {},
  }

  refreshState = () => {
    let todoList = this.props.todoLists.filter(todoList => {
      return todoList.id === this.props.navigation.getParam('id');
    });
    this.setState({
      todoList:todoList[0],
    });
    
  }

  deleteTodo = (id) => {
    Keyboard.dismiss()
    this.props.deleteTodo(this.state.todoList.id, id);
    this.refreshState();
  }

  addTodo = (content) => {
    Keyboard.dismiss()
    this.props.addTodo(this.state.todoList.id, content);
    this.refreshState()
  }

  componentDidMount () {
    this.refreshState();
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground source={require('../assets/bg3.png')} style={styles.container}>
        <Text style={styles.header}>{this.state.todoList.name}</Text>
        <AddForm addTodo={this.addTodo} />
        <Todo todos={this.state.todoList.todos} deleteTodo={this.deleteTodo} />
      </ImageBackground>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
    },
     header: {
         fontWeight: 'bold',
         margin:10,
         fontSize: 28,
     }
});

const mapStateToProps = (state) => {
  return {
      todoLists: state.todoLists,
      // data: state.data
  }
}

const mapDispatchToProps = (dispatch) => (
  bindActionCreators({
    addTodo,
    deleteTodo
  }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
