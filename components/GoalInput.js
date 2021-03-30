import React , {useState} from 'react'
import { StyleSheet, View , TextInput,Button,Modal} from 'react-native'

function GoalInput({onPress,addMode,Cancel}) {
    const [text,settext] = useState('')
    return (
        <Modal visible={addMode} animationType="slide">
            <View style={styles.inputteactcon}>
                <TextInput placeholder="Course Goal" style={styles.input} value={text} onChangeText={(enteredtext)=>{settext(enteredtext)}} />
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <Button title="cancel" color="red" onPress={Cancel}  />
                    </View>
                    <View style={styles.button}>
                        <Button title="Add" onPress={() => {
                            onPress(text)
                            settext('')
                        }} />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputteactcon: {flex:1,alignItems:'center',justifyContent:'center'},
    input: {
        width:'80%',borderBottomColor:'black',borderWidth:1,padding:10,marginBottom:10
      },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    button:{
        width: '40%'
    }
})

export default GoalInput
