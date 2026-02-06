import { StyleSheet, ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from './components/Header';
import NavBar from './components/navBar';
import ShopCards from './components/ShopCards';
import Products from './components/Products';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView style={styles.container}>
        <Header />
        <NavBar />
        <ShopCards />
        <Products />
    </ScrollView>
    </SafeAreaView>
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