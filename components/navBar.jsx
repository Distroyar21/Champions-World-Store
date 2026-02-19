import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, ScrollView, View, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';




const { width: SCREEN_WIDTH } = Dimensions.get('window');
const CARD_WIDTH = SCREEN_WIDTH;
const ITEM_FULL_WIDTH = CARD_WIDTH;

const NavBar = () => {
  const navigation = useNavigation();



  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const initialData = [
    { id: 1, title: 'FOOTBALL', uri: 'https://images.unsplash.com/photo-1517649763962-0c623066013b', desc: 'Gear up for match day with pro-level football kits' },
    { id: 2, title: 'BASKETBALL', uri: 'https://images.unsplash.com/photo-1546519638-68e109498ffc', desc: 'Dominate the court with the latest basketball gear' },
    { id: 3, title: 'CRICKET', uri: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da', desc: 'Premium bats and protective equipment for champions' },
    { id: 4, title: 'TENNIS', uri: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0', desc: 'Professional rackets and apparel for every surface' },
  ];

  const carouselData = [...initialData, { ...initialData[0], id: 'clone-0' }];

  useEffect(() => {
    const totalItems = carouselData.length;

    const interval = setInterval(() => {
      let nextIndex = currentIndex + 1;
      
     
      scrollRef.current?.scrollTo({
        x: nextIndex * ITEM_FULL_WIDTH,
        animated: true,
      });

      setCurrentIndex(nextIndex);

      if (nextIndex === totalItems - 1) {
        setTimeout(() => {
          scrollRef.current?.scrollTo({ x: 0, animated: false });
          setCurrentIndex(0);
        }, 500); 
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, carouselData.length]);

  const handleScrollEnd = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / ITEM_FULL_WIDTH);
  
    if (index >= carouselData.length - 1) {
      scrollRef.current?.scrollTo({ x: 0, animated: false });
      setCurrentIndex(0);
    } else {
      setCurrentIndex(index);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_FULL_WIDTH}
        pagingEnabled
        decelerationRate="fast"
        onMomentumScrollEnd={handleScrollEnd}
      >
        {carouselData.map((item) => (
          <View key={item.id} style={styles.cardContainer}>
            <ImageBackground
              style={styles.image}
              imageStyle={{ borderRadius: 15 }}
              source={{ uri: item.uri }}
            >
              <View style={styles.card}>
                <Text style={styles.football}>{item.title}</Text>
                <Text style={styles.description}>{item.desc}</Text>

                <View style={styles.button}>
                  <TouchableOpacity style={styles.shopbtn}>
                    <Text style={styles.shopText}> Shop Now </Text>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.explorebtn} onPress={() => navigation.navigate('AllSports')}>


                    <Text style={styles.exploreText}> Explore Sports </Text>
                  </TouchableOpacity>

                </View>
              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    borderRadius: 15,
  },
  cardContainer: {
    width: CARD_WIDTH,
    height: 400,
    paddingHorizontal: 15, 
  },
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.85)',
    padding: 15,
    marginTop: 50,
    borderRadius: 12,
    width: '80%',
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
    marginTop: 15,
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