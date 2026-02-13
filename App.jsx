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
import MenCollection from './components/MenCollection';
import WomenCollection from './components/WomenCollection';
import KidsCollection from './components/KidsCollection';

export default function App() {

  const [activeView, setActiveView] = useState('home');

  return (
    <SafeAreaProvider style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} />
      <Header onOpenExplore={(view) => setActiveView(view)} />
      
      {activeView === 'allSports' && (
        <AllSports onClose={() => setActiveView('home')} />
      )}
      
      {activeView === 'menCollection' && (
        <MenCollection onClose={() => setActiveView('home')} />
      )}

      {activeView === 'womenCollection' && (
        <WomenCollection onClose={() => setActiveView('home')} />
      )}

      {activeView === 'kidsCollection' && (
        <KidsCollection onClose={() => setActiveView('home')} />
      )}

      {activeView === 'home' && (
      <ScrollView style={styles.container}>
        <NavBar onOpenExplore={() => setActiveView('allSports')}/>
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