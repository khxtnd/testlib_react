import React, { useRef } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import DeepAR, { ErrorTypes, IDeepARHandle, TextureSourceTypes } from 'react-native-deepar';
import RNFetchBlob from 'rn-fetch-blob';

function App(): React.JSX.Element {
  const deepARRef = useRef<IDeepARHandle>(null);
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <DeepAR
        ref={deepARRef}
        apiKey="0b75418fe7568e5ae88f8567b1aade844d451769c9f2cd6e4a78681a3337d9fdcdeaad90e0df4a6f"
        style={{ flex: 1 }}
        videoWarmup={true}
        onVideoRecordingPrepared={() => {
          console.log('onVideoRecordingPrepared');
        }}
        onError={(text: String, type: ErrorTypes) => {
          console.log('onError =>', text, 'type =>', type);
        }}
      />

      <Button
        title="Random Background Image"
        onPress={() => {
         
        }}
      />
      <Button
        title="Show Stats"
        onPress={() => {
          deepARRef?.current?.showStats(true);
          
        }}
      />

      <Button
        title="Fire Effect"
        onPress={() => {

          RNFetchBlob.config({})
                .fetch('GET', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHjgEKHW8qWMgUtdMv6J9tojqmigvTIUz08w&s')
                .then((res) => {
                  deepARRef?.current?.changeParameterTexture({
                    gameObject: 'Background',
                    component: 'MeshRenderer',
                    parameter: 's_texColor',
                    type: TextureSourceTypes.BASE64,
                    value: res.base64(),
                  });
                });


          deepARRef?.current?.switchEffect({
            mask: "background_segmentation",
            slot: 'effect',
          });

        }}
      />
    </View>

  );
}

const styles = StyleSheet.create({

});

export default App;
