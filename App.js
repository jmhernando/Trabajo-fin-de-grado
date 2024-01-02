import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets} from 'react-native-safe-area-context';
import { UseFonts } from 'expo-font';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsynch();


function Homescreen(){
  const insets = useSafeAreaInsets();
  return (
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Text style={{ fontSize: 40}}>Acaricia a tu perrito porfi.</Text>
    </View>
  );
}
export default function App() {
  const [fontsLoaded, fontError] = UseFonts({
    'Inter-black': require('./assets/fonts/Inter-Black.otf'),
  });
  
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError){
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);
  
  return (
    <SafeAreaProvider>
      <Homescreen />
    </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
