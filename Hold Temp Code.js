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
import {  StatusBar} from 'react-native';
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
    <View style={styles.container}>
      <View>
        <Text
          style={styles.dummytext}
        >
          Who are you?      
        </Text>
      </View>
      <Text
        style={styles.dummytext}
        >
         Hi there!!!
        </Text>
        <Button title= 'Touch Me'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dummytext: {
    margin:30,
    backgroundColor: 'lightgreen',
    borderWidth: 2, 
    borderColor: 'purple', 
    padding: 16
  }
});
