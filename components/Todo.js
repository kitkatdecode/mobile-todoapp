import React from 'react';
import { StyleSheet, View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

function Todo({todos, deleteTodo}) {
    return(
        <View style={styles.list}>
            <FlatList
                keyExtractor={(item) => item.id.toString()}
                data={todos}
                renderItem={({ item }) => {
                    return (
                            <View style={styles.listItem}>
                                <Text style={styles.text}>{item.content}</Text>
                                <View style={styles.deleteButton}>
                                    <TouchableOpacity onPress={() => {deleteTodo(item.id)}}>
                                        <MaterialIcons name='clear' style={styles.icon} size={28} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                    );
                }}
            />
            
        </View>
    );
}

const styles = StyleSheet.create({
    listItem: {
        flex:1,
        flexDirection:'row',
        backgroundColor: 'dodgerblue',
        fontWeight:'bold',
        // alignItems:'center',
        borderRadius: 3,
        elevation: 5,
        shadowOffset: {width:1, height:1},
        shadowColor: 'grey',
        shadowOpacity: 0.3,
        shadowRadius: 5,
        margin: 5,
        padding: 10,
        width:Dimensions.get('window').width-50,
    },
    list: {
        flex:1,
        margin:2,
        // borderWidth: 1,
        // borderColor: 'darkturquoise',
        width:Dimensions.get('window').width-30,
        alignItems:'center',
        margin:10,
    },
    text: {
        // fontWeight: 'bold',
        flex: 5,
        padding:5
    },
    deleteButton: {
        flex:1,
        alignItems:'flex-end',
    }
});
export default Todo;