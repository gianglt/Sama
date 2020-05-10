import { Ionicons } from '@expo/vector-icons';
import { SplashScreen } from 'expo';
import * as Font from 'expo-font';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

export default class PrepareResources extends React.Component {

    const [isLoadingComplete, setLoadingComplete] = React.useState(false);

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
      async function loadResourcesAndDataAsync() {
        try {
          SplashScreen.preventAutoHide();
  
          // Load fonts
          await Font.loadAsync({
            ...Ionicons.font,
            'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
          });
        } catch (e) {
          // We might want to provide this error information to an error reporting service
          console.warn(e);
        } finally {
          setLoadingComplete(true);
          SplashScreen.hide();
        }
      }
  
      loadResourcesAndDataAsync();
    }, []);
  

}