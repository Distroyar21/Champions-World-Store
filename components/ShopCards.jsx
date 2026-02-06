import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SportCard from './SportCard';

const ShopCards = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Shop by Sport</Text>
        <Text style={styles.subtext}>
          Find everything you need for your favorite activities
        </Text>
      </View>

    <ScrollView horizontal showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.cardsRow}>

        <SportCard
          title="Running"
          subtitle="Shoes & Apparel"
          image="https://images.unsplash.com/photo-1762943107238-a87f6f7bf6a9?w=400"
        />
        <SportCard
          title="Fitness"
          subtitle="Gym Equipment"
          image="https://images.unsplash.com/photo-1762943107238-a87f6f7bf6a9?w=400"
        />
        <SportCard
          title="Skating"
          subtitle="Skateboards, inline skates, protective gear, and accessories"
          image="https://images.unsplash.com/photo-1762943107238-a87f6f7bf6a9?w=400"
        />
        <SportCard
          title="Skating"
          subtitle="Skateboards, inline skates, protective gear, and accessories"
          image="https://images.unsplash.com/photo-1762943107238-a87f6f7bf6a9?w=400"
        />
        </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  },

  header: {
    paddingHorizontal: 15,
    marginBottom: 15
  },

  text: {
    fontSize: 24,
    fontWeight: 'bold'
  },

  subtext: {
    fontSize: 14,
    color: '#666',
  },

  cardsRow: {
    paddingLeft: 15,
    paddingRight: 5
  },
});

export default ShopCards;
