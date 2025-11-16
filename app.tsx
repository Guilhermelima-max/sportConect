import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import telaLogin from './telas/Login';
import homescreen from './telas/home';
import BottomTabs from "./components/tabNavigation"; 
// 🔹 Defina os nomes e tipos das rotas
export type RootStackParamList = {
  Login: undefined;
  Home: { userId?: number } | undefined; // exemplo com parâmetro opcional
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        
        <Stack.Screen name="Login" component={telaLogin} />
         <Stack.Screen name="Home" component={BottomTabs} /> 
      
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
   
}
