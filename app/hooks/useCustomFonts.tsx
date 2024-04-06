// hooks/useCustomFonts.ts

import { useEffect, useState } from 'react';
import * as Font from 'expo-font';

export const useCustomFonts = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'outfit-regular': require('../../assets/fonts/Outfit-Regular.ttf'),
        'outfit-medium': require('../../assets/fonts/Outfit-Medium.ttf'),
        'outfit-bold': require('../../assets/fonts/Outfit-Bold.ttf'),
        'poppins': require('../../assets/fonts/Poppins-Regular.ttf'),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  return fontsLoaded;
};
