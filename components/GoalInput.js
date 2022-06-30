import {useState} from "react";
import { ActivityIndicator, 
         Button, 
         DrawerLayoutAndroid,
         FlatList, 
         Image, 
         ImageBackground, 
         InputAccessoryView,
         KeyboardAvoidingView, 
         Modal,
         Pressable, 
         RefreshControl,
         SafeAreaView,
         ScrollView,
         SectionList,
         StatusBar,
         StyleSheet,
         Text,
         TextInput,
         View,
         VirtualizedList
} from 'react-native';

function GoalInput (props) {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    
    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('');
    } 

     return (
        <View style= {styles.inputContainer}>
            <TextInput 
                style={styles.textInput} 
                placeholder="Your course goal!" 
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <Button title="Add Goal" onPress={props.onAddGoal} />
        </View>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        width: '70%',
        margin: 8,
        padding: 8,
      },
    
      inputContainer: {
        flex: 1,
        flexDirection: 'Row',
        alignItems: 'Center',
        justifyContent: 'Center',
        marginBottom: 24,
        borderBottomWidth: 2,
        borderColor: 'green',
      },
});