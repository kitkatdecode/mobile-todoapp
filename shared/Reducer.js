const initState = {
    todoLists:[
        {
        name:"Sample",
        todos:[
            {id:1, content: "Make your bed"},
            {id:2, content: "Do work out"},
        ],
        id:1
        },
        
    ],
}

export function deleteTodo(listId, todoId) {
    return {type:'DELETE_TODO', listId:listId, todoId:todoId}
}

export function addTodo(listId, content) {
    return {type:'ADD_TODO', listId:listId, content:content}
}

export function deleteTodoList(id) {
    return {type:'DELETE_TODO_LIST', id:id}
}

export function addTodoList(listName) {
    return {
        type:'ADD_TODO_LIST', 
        listName:listName
    }
}

const RootReducer = (state = initState, action) => {
    if(action.type == 'ADD_TODO') {
        let listId = action.listId;
        let content = action.content;

        let newTodo = {id:Math.random(), content:content};
        let newTodoList = state.todoLists.filter(todoList => {
            return todoList.id === listId;
        });
        
        newTodoList = newTodoList[0];
        newTodoList.todos = [newTodo, ...newTodoList.todos];

        let newTodoLists = state.todoLists.map(todoList => {
            if(todoList.id === listId){
            return newTodoList;
            }
            else{
            return todoList;
            }
        });
        return{
            ...state,
            todoLists:newTodoLists
        };
    }

    else if(action.type == 'DELETE_TODO'){
        let listId = action.listId;
        let todoId = action.todoId;

        let newTodoList = state.todoLists.filter(todoList => {
            return todoList.id === listId;
        });
        newTodoList = newTodoList[0];
        newTodoList.todos = newTodoList.todos.filter(todo => {
            return todo.id !== todoId;
        });
    
        let newTodoLists = state.todoLists.map(todoList => {
            if(todoList.id === listId){
            return newTodoList;
            }
            else{
            return todoList;
            }
        });
        return{
            ...state,
            todoLists:newTodoLists
        };
    }

    else if(action.type == 'DELETE_TODO_LIST') {
        let todoLists = state.todoLists.filter(todoList => {
            return todoList.id !== action.id;
        });
    
        return{
            ...state,
            todoLists:todoLists
        };
    }

    else if(action.type == 'ADD_TODO_LIST') {
        let newTodoList = {name:action.listName, todos:[], id:Math.random()};
        let todoLists = [newTodoList, ...state.todoLists];

        return{
            ...state,
            todoLists:todoLists
        };
    }

    else {
        return {
            ...state,
        }
    }
}

export default RootReducer;