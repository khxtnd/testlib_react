import React from 'react';
import { Alert, Button, NativeModules, StyleSheet, View } from 'react-native';

const { DemoNativeModule } = NativeModules;

function App(): React.JSX.Element {
  const handleLogin = async () => {
    try {
      const username = "a4o4yusg74@vnpost";
      const token = "a23f667f5b79771bf3f1acf0896f8567a65cfe0e";
      const phoneNumber = "0345023705";

      await DemoNativeModule.loginChat(username, token, phoneNumber);
    } catch (error: any) {
      Alert.alert('Error', `Login failed: ${error.message || error}`);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
