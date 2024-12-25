
import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {


  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <View style={styles.container}>
          <Text style={{fontSize: 30}}>khanhp878</Text>
        </View>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  joinContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default App;
