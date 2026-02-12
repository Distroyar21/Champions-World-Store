import { StyleSheet, ScrollView, StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import Header from './components/Header';
import NavBar from './components/navBar';
import ShopCards from './components/ShopCards';
import Products from './components/Products';
import DeliveryPolicy from './components/DeliveryPolicy';
import Footer from './components/Footer';
import AllSports from './components/AllSports';

export default function App() {

  const [showExplore, setShowExplore] = useState(false);

  return (
    <SafeAreaProvider style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} />
      <Header onOpenExplore={() => setShowExplore(true)} />
      {showExplore ?(
        <AllSports onClose={() => setShowExplore(false)} />
      ): (
      <ScrollView style={styles.container}>
        <NavBar onOpenExplore={() => setShowExplore(true)}/>
        <ShopCards />
        <Products />
        <DeliveryPolicy />
        <Footer/>
    </ScrollView>
      )}
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