import { View, Text, StyleSheet } from 'react-native';

const SaleDelivery = ({lucideIcon, shippingText, orderText}) => {
  return (
    
      <View style={styles.deliveryComponent}>
        <View style={styles.component}>
          <View style={styles.lucideBtn}>
            {lucideIcon}
          </View>
          <Text style={styles.freeShippingText}>{shippingText}</Text>
          <Text style={styles.orderText}>{orderText}</Text>
          </View>
      </View>
  )
};

const styles = StyleSheet.create({
  

  deliveryComponent: {
    marginTop: 10,
  },

  component: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    marginHorizontal: 30,
    marginVertical: 10,
    borderRadius: 12,
    padding: 15,
  },

  lucideBtn: {
    backgroundColor: '#ccd9fa',
    padding: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems:'center'
  },

  freeShippingText: {
    marginTop: 18,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000'
  },

  orderText: {
    fontSize: 15,
    marginTop: 13,
  }
});

export default SaleDelivery;
