import { View, ScrollView, Text, StyleSheet } from 'react-native';

const SaleDelivery = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.saleContainer}>
        <Text style={[styles.text, styles.text1]}>Winter Sale</Text>
        <Text style={[styles.text, styles.text2]}>Up to 50% OFF on Selected Items</Text>
        <Text style={[styles.text, styles.text3]}>Limited time offer Don't miss {"\n"}out!</Text>
      </View>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
paddingTop: 50,
  },

  saleContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fb8d10',
    margin: 15,
    borderRadius: 15
  },

  text: {
    color: '#fff',
    textAlign: 'center'
  },
  text1: {
    marginTop: 30,
    fontSize: 45,

  },
  text2: {
    marginTop: 15,
    fontSize: 30,
  },

  text3: {
    marginTop: 22,
    fontSize: 18,
  },
});

export default SaleDelivery;
