import React from "react";

import { StyleSheet, Text, View} from 'react-native';
import { ActivityIndicator} from 'react-native';
import { Button} from 'react-native';
import { FlatList} from 'react-native';
import { Image} from 'react-native';
import { ImageBackground} from 'react-native';
import { KeyboardAvoidingView} from 'react-native';
import { Modal} from 'react-native';
import { RefreshControl} from 'react-native';
import { ScrollView} from 'react-native';
import { SectionList} from 'react-native';
import { StatusBar} from 'react-native';
import { TextInput} from 'react-native';
import { TouchableHighlight} from 'react-native';
import { TouchableOpacity} from 'react-native';
import { TouchableWithoutFeedback} from 'react-native';
import { VirtualizedList} from 'react-native';
import { DrawerLayoutAndroid} from 'react-native';
import { TouchableNativeFeedback} from 'react-native';
import { InputAccessoryView} from 'react-native';
import { SafeAreaView} from 'react-native';

export default function App() {
  return ( 
    <View style={styles.appContainer}>
      <View style= {styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder="Your course goal!" />
        <Button title="Add Goal" />
      </View> 
      <View>
        <Text> List of goals...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8
  }
});
