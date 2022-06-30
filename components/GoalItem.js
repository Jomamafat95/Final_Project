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
        <View style={styles.goalItem}>
            <Pressable 
                android_ripple={{ color: 'purple' }} 
                onPress={props.onDeleteItem.bind(this, props.id)}
                style={({pressed}) => pressed && styles.pressedItem}
            >         
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
    );
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: 'brown',
    },
    
    pressedItem: {
        opacity: 0.5
    },
     
    goalText: {
       color: 'pink',
       padding: 8
      },
});