import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from '@clerk/clerk-expo';

import React from 'react'
import Colors from '../../utils/Colors';
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
import { SafeAreaView } from 'react-native-safe-area-context';

const image = require('../../../assets/images/login.png');

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {

  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {

        console.log(`SetActive is ${setActive === undefined ? '' : 'not'} null`)

        setActive?.({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
 
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ alignItems: 'center', flex: 1}}>
        <Image
          style={styles.mainImage}
          source={image}
        />
        <View style={styles.container}>
          <Text style={styles.mainText}>
            Let's find
            <Text style={{fontWeight: 'bold'}}> professional cleaning and repair </Text>
            services
          </Text>
          <Text style={styles.subText}>
            Best App to find services near you which deliver you a professional service
          </Text>
          <TouchableOpacity style={[styles.button, styles.shadow]} onPress={onPress}>
            <Text style={styles.buttonText}>
              Let's get started
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  mainImage: {
    borderRadius: 36,
    borderColor: Colors.black,
    borderWidth: 3,
    marginTop: 30,
    width: '75%',
    height: '85%',
    resizeMode: 'stretch',
    zIndex: 1,
  },

  container: {
    backgroundColor: Colors.primary,
    height: 250,
    width: '100%',
    marginTop: -20,
    zIndex: 2,
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20, 
    borderTopRightRadius: 20,
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  mainText: {
    color: Colors.white,
    fontSize: 26,
    textAlign: 'center'
  },

  subText: {
    textAlign: 'center',
    color: Colors.white,
    marginTop: 20,
    fontSize: 15,
  },

  button: {
    marginTop: 40,
    backgroundColor: Colors.white,
    borderRadius: 99,
    width: '100%',
    position: 'absolute',
    bottom: 25,
  },

  buttonText: {
    fontSize: 17, 
    paddingVertical: 12, 
    textAlign: 'center',
    color: Colors.primary,
  },

  shadow: {
    elevation: 12,
    shadowColor: Colors.black,
  },

})
