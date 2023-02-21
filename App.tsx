import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import CustomerScreen from './src/screens/customerScreen'

export default function App() {
  return (
    // @ts-ignore
    <TailwindProvider utilities={utilities}>
      <View style={styles.droidSafeArea}>
      <CustomerScreen/>
      </View>
  </TailwindProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  droidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 25 : 0
}
});
