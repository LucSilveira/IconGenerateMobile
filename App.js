import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Item Navegação
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// Telas de importação
import OptionsIcon from './Pages/OptionsIcon';
import ViewIcon from './Pages/ViewIcon';

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown : false }}>
        <Stack.Screen name="OptionsIcon" component={OptionsIcon}/>

        <Stack.Screen name="ViewIcon" component={ViewIcon}/>
      </Stack.Navigator>
    </NavigationContainer>
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
