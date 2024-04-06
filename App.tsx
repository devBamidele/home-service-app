import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as SecureStore from 'expo-secure-store';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { SafeAreaProvider } from 'react-native-safe-area-context';


import LoginScreen from './app/screens/login_screen/LoginScreen';
import { PUBLISHABLE_KEY } from './app/utils/config';
import Tabs from './app/navigations/TabNavigation';
import Colors from './app/utils/Colors';
import DismissKeyboardHoc from './app/components/dismisskeyboard.hoc';
import { useCustomFonts } from './app/hooks/useCustomFonts';

export default function App() {

  const fontsLoaded = useCustomFonts();

  const tokenCache = {
    async getToken(key: string) {
      try {
        return SecureStore.getItemAsync(key);
      } catch (err) {
        return null;
      }
    },
    async saveToken(key: string, value: string) {
      try {
        return SecureStore.setItemAsync(key, value);
      } catch (err) {
        return;
      }
    },
  };

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ClerkProvider 
      tokenCache={tokenCache}
      publishableKey={PUBLISHABLE_KEY}
    >
      <SafeAreaProvider>
        <DismissKeyboardHoc>
          
          <View style={styles.container}>
            <SignedIn>
              <Tabs />
            </SignedIn>
            <SignedOut>
              <LoginScreen />
            </SignedOut>
            <StatusBar style="auto" />
          </View>
        </DismissKeyboardHoc>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
});
