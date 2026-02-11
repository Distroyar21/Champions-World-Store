import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');
const NavBar = ({ onOpenExplore }) => {

  const carouselData = [
    { id: 1, title: 'FOOTBALL', uri: 'https://images.unsplash.com/photo-1517649763962-0c623066013b', desc: 'Gear up for match day with pro-level football kits' },
    { id: 2, title: 'BASKETBALL', uri: 'https://images.unsplash.com/photo-1546519638-68e109498ffc', desc: 'Dominate the court with the latest basketball gear' },
    { id: 3, title: 'CRICKET', uri: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da', desc: 'Premium bats and protective equipment for champions' },
    { id: 4, title: 'TENNIS', uri: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0', desc: 'Professional rackets and apparel for every surface' },
  ];
  return(

  <View style={styles.container}>
    <ScrollView 
          horizontal 
          pagingEnabled 
          showsHorizontalScrollIndicator={false}
        >
          {carouselData.map((item) => (
        <ImageBackground  
          key={item.id}
              style={styles.image}
              imageStyle={{ borderRadius: 15 }}  
              source={{ uri: item.uri }}
          >
          <View style={styles.card}>
            <Text style={styles.football}>{item.title}</Text>
            <Text style={styles.description}>
              {item.desc}
            </Text>

          <View style={styles.button}>
            <TouchableOpacity style={styles.shopbtn}>
              <Text style={styles.shopText}> Shop Now </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.explorebtn} onPress={onOpenExplore}>
              <Text style={styles.exploreText}> Explore Sports </Text>
            </TouchableOpacity>
          </View>
        </View>
        </ImageBackground>
        ))}
        </ScrollView>
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
  width: SCREEN_WIDTH - 30,
    justifyContent: 'center',
    padding: 10,
    alignItems: 'center',
    height: 450,
    
  },

  card: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    padding: 20,
    marginTop: 50,
    borderRadius: 12,
    width: '85%',
    height: '60%',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2
  },

  button: {
    flexDirection: 'column',
    marginTop: 15,
    alignItems: 'flex-start'
  },

  carouselWrapper: {
    borderRadius: 15,
    overflow: 'hidden',
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
});


export default NavBar;