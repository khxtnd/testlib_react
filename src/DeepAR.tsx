import React from 'react';
import { Button, NativeModules, StyleSheet, View } from 'react-native';

const { DemoModule } = NativeModules;
function App(): React.JSX.Element {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <Button
        title="Login"
        onPress={() => {
          DemoModule.loginChat123("a4o4yusg74@vnpost", "6841782e116e4ca0a6f395124c4e92b12754bae", "0365882920")
        }}
      />
    </View>

  );
}

const styles = StyleSheet.create({

});

export default App;
