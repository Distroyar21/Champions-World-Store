import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SportCard from './SportCard';

const ShopCards = () => {
  return (
    <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.text}>Shop by Sport</Text>
        <Text style={styles.subtext}>
          Find everything you need for your favorite activities
        </Text>
      </View>

        <View style={styles.cardContainer}>
          <SportCard
            title="Running"
            subtitle="Shoes & Apparel"
            image="https://images.unsplash.com/photo-1762943107238-a87f6f7bf6a9?w=400"
          />
          <SportCard
            title="Fitness"
            subtitle="Gym Equipment"
            image="https://images.unsplash.com/photo-1632077804406-188472f1a810?w=400"
          />
          <SportCard
            title="Skating"
            subtitle="Skateboards, inline skates, protective gear, and accessories"
            image="https://images.unsplash.com/photo-1612100389024-106c3cfdb7d0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNrYXRpbmd8ZW58MHx8MHx8fDA%3D"
          />
          <SportCard
            title="Yoga"
            subtitle="Mats & Accessories"
            image="https://images.unsplash.com/photo-1623171855411-3b686d975cf3?w=400"
          />
          <SportCard
            title="Swimming"
            subtitle="Swimwear & Goggles"
            image="https://images.unsplash.com/photo-1572594505398-97a384b34ec8?w=400"
          />
          <SportCard
            title="Table Tennis"
            subtitle="Table tennis bats, balls, tables, nets, and accessories"
            image="https://plus.unsplash.com/premium_photo-1664304895381-e1231b4fd8e5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dGFibGUlMjB0ZW5uaXN8ZW58MHx8MHx8fDA%3D"
          />
          <SportCard
            title="Team Sports"
            subtitle="Basketball & More"
            image="https://images.unsplash.com/photo-1587166088004-bbd20854280f?w=400"
          />
          <SportCard
            title="Cricket"
            subtitle="Cricket bats, balls, pads, gloves, helmets, and accessories"
            image="https://media.istockphoto.com/id/869958054/photo/cricket-gloves-and-bat.webp?a=1&b=1&s=612x612&w=0&k=20&c=7i2jqGp3tlCTstsFDGJljnqB9wUFaO9baI0sdAZVmLo="
          />
        </View>
        
      </ScrollView>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: '15%'
  },

  header: {
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 25
  },

  text: {
    fontSize: 40,
    fontWeight: '300'

  },

  subtext: {
    marginTop: 8,
    fontSize: 18,
    color: '#3f3f3f',
    fontWeight: '200',
    textAlign: 'center'
  },

  cardsRow: {
    paddingLeft: 15,
    paddingRight: 5
  },

  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingBottom: 50,
    backgroundColor: '#f8f8f8',
  }
});

export default ShopCards;
