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
    <View style={{padding: 50, 
                  flexDirection: 'row', 
                  width: '80%', 
                  height: 300, 
                  justifyContent: 'space-around',
                  alignItems:'stretch' }}
    >
      <View 
        style={{
          backgroundColor: 'red',
          flex: 1,
          width: '100',
          height: '100',
          justifyContent: 'center',
          alignItems: 'center'  
        }}
      >
        <Text>1</Text>
      </View>
      <View
        style={{
          backgroundColor: 'blue',
          flex: 1,
          width: '100',
          height: '100',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>2</Text>
      </View>
      <View
        style={{
          backgroundColor: 'green',
          flex: 1,
          width: '100',
          height: '100',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Text>3</Text>
      </View>
    </View>
    );
  }