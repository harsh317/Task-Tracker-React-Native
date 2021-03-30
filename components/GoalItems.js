import React from 'react'
import { StyleSheet, Text, View,TouchableHighlight} from 'react-native'

function GoalItems({itemdata,DoneTask,DeleteItem}) {
    return (
        <TouchableHighlight underlayColor="lightgreen" onLongPress={DoneTask} onPress={DeleteItem}>
            <View style={styles.listitems}>
                <Text>{itemdata.item.value}</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    listitems: {
        padding: 20,
        margin:10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth:1
      }
})

export default GoalItems
