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
        setEnteredGoalText('../assets/images/BigBlueDivingClub.png');
    } 

     return (
        <Modal visible ={props.visible} animationType="slide" >
            <View style= {styles.inputContainer}>
                <Image style={styles.image} source={require()} />
                <TextInput 
                    style={styles.textInput} 
                    placeholder="Your course goal!" 
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title="Add Goal" onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button title="Cancel" onPress={props.onCancel} />
                    </View>
                </View>
            </View>
        </Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        alignItems: 'Center',
        justifyContent: 'Center',
        marginBottom: 24,
        padding: 16,
        borderBottomWidth: 2,
        borderColor: 'green',
    },

    textInput: {
        borderWidth: 1,
        borderColor: 'black',
        width: '100%',
        padding: 8,
    },
    
    image: {
        width: 100,
        height: 100,
        margin: 20
    },
      
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },

    button: {
        width: '100',
        marginHorizontal: 8
   }
});