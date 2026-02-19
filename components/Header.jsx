import {Image, StyleSheet, Pressable, View, Text, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import {Search, User, ShoppingBag, ShoppingCart, Menu } from 'lucide-react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';



const {width, height} = Dimensions.get('window');

const Header = () => {

  const navigation = useNavigation();
  const [menuOpen, setMenuOpen] = React.useState(false);



  return (
  <>
  
  
    {menuOpen &&(
      <Pressable style={styles.backdrop} onPress={() => setMenuOpen(false)} />
    )}

    {menuOpen && (
      <View style={styles.menuBar}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('AllSports');
            setMenuOpen(false);
          }}><Text style={styles.menuText}>All Sports</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate('MenCollection');
            setMenuOpen(false);
          }}><Text style={styles.menuText}>Men Collection</Text></TouchableOpacity>
          <TouchableOpacity onPress={() =>{
            navigation.navigate('WomenCollection');
            setMenuOpen(false);
          }}><Text style={styles.menuText}>Women Collection</Text></TouchableOpacity>
          <TouchableOpacity onPress={() =>{
            navigation.navigate('KidsCollection');
            setMenuOpen(false);
          }}><Text style={styles.menuText}>Kids Collection</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate('AccessoriesSupporters');
            setMenuOpen(false);
          }}><Text style={styles.menuText}>Accessories & Supporters</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {
            navigation.navigate('ProteinSupplements');
            setMenuOpen(false);
          }}><Text style={styles.menuText}>Protein & Supplements</Text></TouchableOpacity>



      </View>
    )}

    <View style={styles.container}>
      <View style={styles.row}>

        <View style={styles.left}>
          <TouchableOpacity onPress={() => setMenuOpen(!menuOpen)} style={styles.menuButton}>
            <Menu size={25} color="#000" />
          </TouchableOpacity>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
        </View>

        <View style={styles.iconsGroup}>
          <TouchableOpacity style={styles.icon} onPress={() => navigation.navigate('LoginSignup')}><User /></TouchableOpacity>


          <TouchableOpacity style={styles.icon}><ShoppingBag /></TouchableOpacity>
          <TouchableOpacity style={styles.icon}><ShoppingCart /></TouchableOpacity>
        </View>
      </View>

          <View style={styles.search}>
          <View style={styles.searchBar}>
            <Search size={20} color="gray" />
            <TextInput placeholder="Search..." style={styles.input} />
          </View>
        </View>
  </View>
</>
  );
}

const styles = StyleSheet.create({
  container: {
  backgroundColor: '#fff',
  borderBottomWidth: 1,
  borderBottomColor: '#eee',
  paddingTop: 40,
  marginTop: 12,
  zIndex: 100
  },


  backdrop: {
    position: 'absolute',
    top: 12,
    left: 0,
    width: width,
    height: height,
    backgroundColor: 'rgba(0,0,0,0.3)',
    zIndex: 90
  },

  menuBar: {
    position: 'absolute',
  top: 180,
    left: 0,
    width: width,
    height: height * 0.36,
    backgroundColor: '#fff',
    zIndex: 1000,
  },

  menuText: {
    fontSize: 17,
    paddingVertical: 12,
    borderBottomColor: '#e7e7e7',
    borderBottomWidth: 1,
    marginHorizontal: 10,
    color: '#5a5959'
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingBottom: 10
  },

  left: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  menuButton: {
  marginRight: 0
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 10
  },

  logo: {
    width: 120,
    height: 60,
    resizeMode: 'contain',
  },

  icon: {
    marginLeft: 15,
    size: 22,
    color: '#000'
  },

  iconsGroup: {
    flexDirection: 'row'
  },

  search: {
    paddingHorizontal: 15,
    marginVertical: 10
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#d3d1d1'
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 14,
    color: '#000000'
  },

  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10
  },

  navText: {
    fontSize: 14,
    fontWeight: '600',
    marginRight: 4,
    color: '#434141'
  },

  navTextHover: {
    color: '#2563eb'
  },

});

export default Header;