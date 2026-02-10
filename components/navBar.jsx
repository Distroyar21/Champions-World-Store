import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import AllSports from './AllSports';
import React from 'react';

const NavBar = () => {
  const [showExplore, setShowExplore] = React.useState(false);
  return(

  <View style={styles.container}>
    {showExplore ? (
      <AllSports onClose={() => setShowExplore(false)}/>
    ) : (

        <ImageBackground  style={styles.image}
          imageStyle={{ borderRadius: 15 }}
          source={{ uri: 'https://images.unsplash.com/photo-1517649763962-0c623066013b'}} >
          <View style={styles.card}>
            <Text style={styles.football}>FOOTBALL</Text>
            <Text style={styles.description}>
              Gear up for match day with pro-level football kits
            </Text>

          <View style={styles.button}>
            <TouchableOpacity style={styles.shopbtn}>
              <Text style={styles.shopText}> Shop Now </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.explorebtn} onPress={() => setShowExplore(true)}>
              <Text style={styles.exploreText}> Explore Sports </Text>
            </TouchableOpacity>
          </View>
        </View>

          <View style={[styles.arrow, styles.arrowLeft]}>
            <ChevronLeft size={20} />
          </View>

          <View style={[styles.arrow, styles.arrowRight]}>
            <ChevronRight size={20} />
          </View>
        </ImageBackground>
    )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    borderRadius: 15,
    padding: 15,
  },

image: {
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    height: 500
  },

  card: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    padding: 20,
    marginTop: 50,
    borderRadius: 12,
    width: '95%',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2
  },

  button: {
    flexDirection: 'column',
    marginTop: 15,
    alignItems: 'flex-start'
  },

  shopbtn: {
    backgroundColor: '#ffffff',
    paddingVertical: 17,
    width: '70%',
    alignItems: 'center',
    borderRadius: 10
  },

  shopText: {
    color: '#000000',
  fontWeight: 'bold'
},

exploreText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: '700'
},

  explorebtn: {
    backgroundColor: 'rgba(224, 223, 223, 0.7)',
    padding: 15,
    width: '60%',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: '#000',
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 30,
    marginLeft: 10
  },

  football: {
    color: '#d6ac22',
    fontWeight: 'bold',
    fontSize: 12
  },

  description: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 8
  },

  arrow: {
    position: 'absolute',
    top: '50%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 5,
  },

  arrowLeft: {
    left: 8,
  },

  arrowRight: {
    right: 8,
  },
});


export default NavBar;