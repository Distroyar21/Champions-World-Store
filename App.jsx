import { StyleSheet, ScrollView, StatusBar, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import Header from './components/Header';
import NavBar from './components/navBar';
import ShopCards from './components/ShopCards';
import Products from './components/Products';
import DeliveryPolicy from './components/DeliveryPolicy';
import Footer from './components/Footer';
import AllSports from './components/AllSports';
import MenCollection from './components/MenCollection';
import WomenCollection from './components/WomenCollection';
import KidsCollection from './components/KidsCollection';
import ProteinSupplements from './components/Protein&Supplements';
import AccessoriesSupporters from './components/Accessories&Spporters';
import LoginSignup from './components/LoginSignup';
import FootBall from './components/FootBall';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
};

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Header />
      <ScrollView style={styles.container}>

        <NavBar />
        <ShopCards />
        <Products />
        <DeliveryPolicy />
        <Footer/>
      </ScrollView>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaProvider style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} backgroundColor="transparent" translucent={true} />
      <NavigationContainer theme={MyTheme}>

        <Stack.Navigator 
          screenOptions={{ 
            headerShown: false,
            animation: 'none'
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="LoginSignup" component={LoginSignup} />
          <Stack.Screen name="AllSports" component={AllSports} />
          <Stack.Screen name="MenCollection" component={MenCollection} />
          <Stack.Screen name="WomenCollection" component={WomenCollection} />
          <Stack.Screen name="KidsCollection" component={KidsCollection} />
          <Stack.Screen name="ProteinSupplements" component={ProteinSupplements} />
          <Stack.Screen name="AccessoriesSupporters" component={AccessoriesSupporters} />
          <Stack.Screen name="FootBall" component={FootBall} />
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaProvider>
  );  
}


const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    backgroundColor: '#fff'
  },
});