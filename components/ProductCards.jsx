import { View, StyleSheet, ImageBackground, Text } from "react-native"

const ProductCards = ({image, tag, category, title, rating, reviews, oldPrice, currentPrice, discount, stock
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image}
      source={{uri: image}} imageStyle={styles.corners}>
        <View style={styles.overlay}>
          <View style={[styles.badge, styles.saleBadge]}>
            <Text style={styles.text}>{tag}</Text>
          </View>
          {stock && (
            <View style={[styles.badge, styles.stockBadge]}>
              <Text style={styles.text}>{stock}</Text>
            </View>
          )}
        </View>
      </ImageBackground>

      <View style={styles.details}>
          <Text style={styles.category}>{category}</Text>
          <Text style={styles.productName}>{title}</Text>
      </View>

      <View style={styles.rating}>
        <Text style={styles.stars}>★ ★ ★ ★ ☆</Text>
        <Text style={styles.ratingValue}>{rating}</Text>
        <Text style={styles.reviews}>({reviews})</Text>
      </View>

      <View style={styles.priceSection}>
        <Text style={styles.currentPrice}> {currentPrice}</Text>
        <Text style={styles.originalPrice}> {oldPrice}</Text>
      </View>
      <Text style={styles.discount}>{discount}% off</Text>
    </View>
  )
};

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowRadius: 4,
    elevation: 3,
    paddingBottom: 15
  },
  image: {
    width: '100%',
    height: 260,
  },

  corners: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },

  overlay:{
    flexDirection:'row',
    justifyContent: 'space-between',
    padding: 15
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  saleBadge: {
    backgroundColor: '#ff4d4d',
  },

  stockBadge: {
    backgroundColor: '#ff4d4d',
  },

  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold'
  },

  details: {
    padding: 15,
    marginLeft: 8,
  },

  category: {
    color: '#8e8e94',
    fontSize: 14,
    marginBottom: 5
  },

  productName: {
    fontSize: 18,
    fontWeight: 400,
    marginBottom: 8
  },

  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginLeft: 16
  },
  stars: {
    color: '#ffd700',
    fontSize: 18
  },
  ratingValue: {
    fontWeight:'bold',
    marginLeft: 5
  },
  reviews: {
    color: '#8e8e93',
    marginLeft: 2
  },

  priceSection: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginLeft: 15
  },
  currentPrice: {
    fontSize: 24,
    fontWeight: '500',
    color: '#0345ec',
    marginRight: 10
  },
  originalPrice: {
    fontSize: 16,
    color: '#8e8e93',
    textDecorationLine: 'line-through'

  },
  discount: {
    color: '#28a745',
    fontWeight: 600,
    marginTop: 4,
    marginLeft: 18,
  },
});

export default ProductCards;