import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import SaleDelivery from './SaleDelivery';
import { Truck, RefreshCcw, Shield, Tag } from 'lucide-react-native';

const DeliveryPolicy = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.saleContainer}>
        <Text style={[styles.text, styles.text1]}>Winter Sale</Text>
        <Text style={[styles.text, styles.text2]}>Up to 50% OFF on Selected Items</Text>
        <Text style={[styles.text, styles.text3]}>Limited time offer Don't miss {"\n"}out!</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.shopbtn}>Shop Sale Now</Text>
        </TouchableOpacity>
      </View>

      <View>
        <SaleDelivery
        lucideIcon={<Truck size={36} color="#245bff" strokeWidth={1.75} />}
        shippingText={"Free Shipping"}
        orderText={"On orders over ₹50"}
        />
        <SaleDelivery
        lucideIcon={<RefreshCcw size={36} color="#245bff" strokeWidth={1.75} />}
        shippingText={"Easy Returns"}
        orderText={"30-day return policy"}
        />
        <SaleDelivery
        lucideIcon={<Shield size={36} color="#245bff" strokeWidth={1.75} />}
        shippingText={"Secure Payment"}
        orderText={"100% secure transactions"}
        />
        <SaleDelivery
        lucideIcon={<Tag size={36} color="#245bff" strokeWidth={1.75} />}
        shippingText={"Best Prices"}
        orderText={"Guaranteed lowest prices"}
        />
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
    margin: 20,
    borderRadius: 15,
    paddingBottom: 30
  },

  text: {
    color: '#fff',
    textAlign: 'center'
  },
  text1: {
    marginTop: 30,
    fontSize: 43,

  },
  text2: {
    marginTop: 15,
    fontSize: 25,
  },

  text3: {
    marginTop: 22,
    fontSize: 16,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#fff',
    borderRadius: 10
  },
  shopbtn: {
    fontSize: 18,
    marginVertical: 18,
    marginHorizontal: 32,
    color: '#fb8d10'
  },


});

export default DeliveryPolicy;