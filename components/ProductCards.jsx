import { View, StyleSheet, ImageBackground, Text } from "react-native"

const ProductCards = ({image, tag, category, title, rating, reviews, oldPrice, currentPrice, discount, stock, badgeColor = "#ff4d4d"
}) => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image}
      source={{uri: image}} imageStyle={styles.corners}>
        <View style={styles.overlay}>
          {tag &&(
          <View style={[styles.badge, {backgroundColor: badgeColor}]}>
            <Text style={styles.text}>{tag}</Text>
          </View>
          )}

          {stock && (
            <View style={[styles.badge, {backgroundColor: badgeColor}]}>
              <Text style={styles.text}>{stock}</Text>
            </View>
          )}
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.details}>
            <Text style={styles.category}>{category}</Text>
              <Text style={styles.productName}>{title}</Text>
        </View>

        <View style={styles.rating}>
          <Text style={styles.stars}>★ ★ ★ ★ ☆</Text>
          <View style={styles.customer}>
            <Text style={styles.ratingValue}>{rating}</Text>
            <Text style={styles.reviews}>({reviews})</Text>    
          </View>
        </View>

        <View style={styles.priceSection}>
          <Text style={styles.currentPrice}> {currentPrice}</Text>
          <Text style={styles.originalPrice}> {oldPrice}</Text>
          <Text style={styles.discount}>{discount}% off</Text>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({

  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginBottom: 20,
    borderRadius: 12,
    elevation: 3,
    overflow: 'hidden',
  },

  image: {
    flex: 1,
    minHeight: 150
  },

  corners: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
    resizeMode: 'cover'
  },

  content: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between'
  },

  overlay:{
    flexDirection:'row',
    justifyContent: 'space-between',
    padding: 8
  },

  badge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,

  },

  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold'
  },

  details: {
    paddingTop: 20,
    alignItems: 'center'
  },

  category: {
    color: '#8e8e94',
    fontSize: 14,
    marginBottom: 5,
  },

  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center'
  },

  rating: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingRight: 20,
  },
  stars: {
    color: '#ffd700',
    fontSize: 18
  },

  customer: {
    flexDirection: 'row',
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
    justifyContent:'center',
    paddingLeft: 8,
    paddingBottom: 10
  },

  currentPrice: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0345ec',
  },

  originalPrice: {
    fontSize: 13,
    color: '#8e8e93',
    textDecorationLine: 'line-through',
    marginTop: 2,
    marginLeft: 5

  },
  discount: {
    color: '#28a745',
    fontSize: 12,
    fontWeight: 600,
    marginTop: 4,
    marginLeft: 8,
  },
});

export default ProductCards;