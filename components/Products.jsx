import { Text, View, ScrollView, StyleSheet, ImageBackground } from 'react-native';

const Products = () => {
  return(
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.title}>Featured Products</Text>
        <Text style={styles.subtitle}>Top picks for this season</Text>
      </View>

      <View style={styles.container}>
        <ImageBackground source={{
          uri: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400" }}  
          style={styles.image}>

        </ImageBackground>
      </View>

    </ScrollView>
    
  );
}

const styles = StyleSheet.create ({

  header: {
    paddingLeft: 15,
    marginTop: 50,
    backgroundColor: '#ffffff'
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


  image: {
    marginLeft:15,
    width: '95%',
    height: 300,
  }
});

export default Products;