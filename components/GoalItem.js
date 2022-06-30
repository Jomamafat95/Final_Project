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

function GoalItem (props) {
    return (
    <Pressable onPress={props.onDeleteItem}>
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{props.text}</Text>
        </View>
    </Pressable>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: 'brown',
      },
    
      goalText: {
       color: 'white',
      },
});