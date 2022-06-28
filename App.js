import React from "react";

import { StatusBar } from 'expo-status-bar';
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
import { StyleSheet} from 'react-native';
import { Text} from 'react-native';
import { TextInput} from 'react-native';
import { TouchableHighlight} from 'react-native';
import { TouchableOpacity} from 'react-native';
import { TouchableWithoutFeedback} from 'react-native';
import { View} from 'react-native';
import { VirtualizedList} from 'react-native';
import { DrawerLayoutAndroid} from 'react-native';
import { TouchableNativeFeedback} from 'react-native';
import { InputAccessoryView} from 'react-native';
import { SafeAreaView} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World!!!!</Text>
      <StatusBar style="auto" />
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
});
