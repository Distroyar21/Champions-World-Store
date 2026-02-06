import { StyleSheet, ScrollView, SafeAreaView, StatusBar } from 'react-native'; // Fixed typo here
import Header from './components/Header';
import NavBar from './components/NavBar';
import ShopCards from './components/ShopCards';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView style={styles.container}>
        <Header />
        <NavBar />
        <ShopCards />
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