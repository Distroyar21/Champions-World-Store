import { Text, View, ScrollView, StyleSheet } from 'react-native';
import ProductCards from './ProductCards';

const Products = () => {
  return(
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Featured Products</Text>
        <Text style={styles.subtitle}>Top picks for this season</Text>
      </View>

      <ProductCards
        title = "Pro Running Shoes"
        category = "Running"
        currentPrice = "2999"
        oldPrice = "4299"
        discount = "30"
        rating = "4.8"
        reviews = "256"
        stock = "Only 3 left"
        tag="sale"
        image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400"
      />

      <ProductCards
        title = "Premium Yoga Mat"
        category = "Yoga & Fitness"
        currentPrice = "1499"
        oldPrice = "1899"
        discount = "21"
        rating = "4.9"
        reviews = "428"
        tag="Bestseller"
        image="https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400"
      />

      <ProductCards
        title = "Adjustable dumbbells set"
        category = "Fitness"
        currentPrice = "6999"
        oldPrice = "8999"
        discount = "22"
        rating = "4.9"
        reviews = "184"
        stock = "Only 2 left"
        image="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400"
      />

      <ProductCards
        title = "Sports Water Bottle"
        category = "Accessories"
        currentPrice = "699"
        oldPrice = "899"
        discount = "22"
        rating = "4.6"
        reviews = "892"
        image="https://images.unsplash.com/photo-1523362628745-0c100150b504?w=400"
      />

      <ProductCards
        title = "hiking Backpack 40L"
        category = "Outdoor"
        currentPrice = "3999"
        oldPrice = "4999"
        discount = "20"
        rating = "4.8"
        reviews = "156"
        stock = "Only 4 left"
        image="https://images.unsplash.com/photo-1622260614153-03223fb72052?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8SGlraW5nJTIwQmFja3BhY2t8ZW58MHx8MHx8fDA%3D"
      />

      <ProductCards
        title = "Professional Tennis Racket"
        category = "Team Sports"
        currentPrice = "6499"
        oldPrice = "7999"
        discount = "19"
        rating = "4.9"
        reviews = "97"
        image="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400"
      />

      <ProductCards
        title = "Smart Fitness Watch"
        category = "Electronics"
        currentPrice = "12999"
        oldPrice = "9999"
        discount = "23"
        rating = "4.7"
        reviews = "643"
        stock = "Only 1 left"
        image="https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400"
      />

      <ProductCards
        title = "Competition Soccer Ball"
        category = "Team Sports"
        currentPrice = "1999"
        oldPrice = "2499"
        discount = "20"
        rating = "4.8"
        reviews = "321"
        tag="Bestseller"
        image="https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400"
      />
    </ScrollView>
    
  );
}

const styles = StyleSheet.create ({

  screen: {
    backgroundColor: '#f5f5f5'
  },

  header: {
    paddingLeft: 15,
    marginTop: 60,
    marginBottom: 20
  },

  title: {
    fontSize: 34,
    fontWeight: '400',
  },

  subtitle: {
    fontSize: 17,
    color: '#7d7a7a',
    marginTop: 8
  },

});

export default Products;