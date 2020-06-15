import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Platform } from 'react-native';
import { StatusBar, Header, Root, Footer } from './styles';

const isIOS = Platform.OS === 'ios';

export default function App() {
  return (
    <>
    {isIOS && <StatusBar />}
      <Header />
    <Root
        source={{
          uri: 'https://console.dialogflow.com/api-client/demo/embedded/c061926e-7a84-45ad-a41d-09db5f25e259',
        }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        allowsFullscreenVideo
        allowFileAccess
        dataDetectorTypes={['phoneNumber', 'address']}
      />
    </>
  );
}
